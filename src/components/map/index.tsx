import React from 'react'
import { bindActionCreators, Dispatch } from 'redux'
import { connect } from 'react-redux'
import { Affix, List, Button, Card, Avatar, Input, Radio, Row, Col } from 'antd'
import { DownOutlined } from '@ant-design/icons'
import Loading from '../loading'
// import UserLocationWindow from './UserLocationWindow'
// import { MapType } from '../../interfaces/QQMap'
import RadioGroup from 'antd/lib/radio/group'
const { Search } = Input

const styles = {
    map: {
        width: '100%',
        height: 'calc(100vh - 220px)'
    }
}
interface IProps {
    provinces: IProvinceCascade[]
}
interface IState {
    map: any
    provinces: IProvinceCascade[]
    container: any
    ready: boolean
    currentLocation: string
    getCurrentLocationLoading: boolean
    searchOpened: boolean
    citylocation: any
    showSearchRegion: boolean
}
class QQMap extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props)
        const { provinces } = props
        this.state = {
            provinces,
            container: null,
            ready: false,
            currentLocation: '获取中...',
            getCurrentLocationLoading: false,
            searchOpened: false,
            map: null,
            citylocation: null,
            showSearchRegion: false,
        }
    }
    init() {
        const { map } = this.state
        const showUserInfoWindow = (center: LngLat, city?: string) => {
            return new qq.maps.InfoWindow({
                map,
                position: center,
                content: `
                    <div class="user-location-window">
                        <p>${city || '当前'}</button>为常用位置。</p>
                    </div>
                `,
                visible: true
            })
        }
        const showUserLocationMarker = (center: LngLat, name?: string) => {
            const marker = new qq.maps.Marker({
                position: center,
                animation: qq.maps.MarkerAnimation.DROP,
                map: this.state.map
            })
            const info = showUserInfoWindow(center, name)
            qq.maps.event.addListener(marker, 'click', function () {
                info.open();
                info.setPosition(center);
            })
        }

        //设置城市信息查询服务
        const citylocation = new qq.maps.CityService();
        //请求成功回调函数
        citylocation.setComplete((result: Result) => {
            const { name, latLng } = result.detail
            map.setCenter(latLng);
            this.setState({
                currentLocation: name,
                getCurrentLocationLoading: false,
                showSearchRegion: false
            })
            showUserLocationMarker(latLng, name)
        });
        //请求失败回调函数
        citylocation.setError(() => {
            alert("出错了，请输入正确的经纬度！！！")
            this.setState({
                getCurrentLocationLoading: false,
                showSearchRegion: false
            })
        });
        this.setState({
            getCurrentLocationLoading: true,
            citylocation: citylocation
        })
        citylocation.searchLocalCity()
        const markers = []
        // 设置Poi检索服务，用于本地检索、周边搜索
        const searchService = new qq.maps.SearchService({
            complete: function (results: any) {

                //设置回调函数参数
                const pois = results.detail.pois;
                const infoWin = new qq.maps.InfoWindow({
                    map: map
                });
                const latlngBounds = new qq.maps.LatLngBounds();
                for (let i = 0, l = pois.length; i < l; i++) {
                    const poi = pois[i];
                    //扩展边界范围，用来包含搜索到的Poi点
                    latlngBounds.extend(poi.latLng);

                    (function (n) {
                        const marker = new window.qq.maps.Marker({
                            map: map
                        });
                        marker.setPosition(pois[n].latLng);

                        marker.setTitle(i + 1);
                        markers.push(marker);

                        window.qq.maps.event.addListener(marker, 'click', function () {
                            infoWin.open();
                            infoWin.setContent(`<div style="width:280px;height:100px;">POI的ID为：${pois[n].id}，POI的名称为：${pois[n].name}，POI的地址为：${pois[n].address}，POI的类型为：${pois[n].type}</div>`);
                            infoWin.setPosition(pois[n].latLng);
                        });
                    })(i);
                }
                //调整地图视野
                map.fitBounds(latlngBounds);
            },
            //若服务请求失败，则运行以下函数
            error: function () {
                alert("出错了。");
            }
        })

        //清除地图上的marker
        // function clearOverlays(overlays: any) {
        //     var overlay;
        //     while (overlay = overlays.pop()) {
        //         overlay.setMap(null);
        //     }
        // }
        //设置搜索的范围和关键字等属性
        function searchKeyword() {
            var keyword = '龙华公园';
            var region = '深圳市';
            // var pageIndex = parseInt(document.getElementById("pageIndex").value);
            // var pageCapacity = parseInt(document.getElementById("pageCapacity").value);
            // clearOverlays(markers);
            //根据输入的城市设置搜索范围
            searchService.setLocation(region);
            //设置搜索页码
            // searchService.setPageIndex(pageIndex);
            //设置每页的结果数
            // searchService.setPageCapacity(pageCapacity);
            //根据输入的关键字在搜索范围内检索
            searchService.search(keyword);
            //根据输入的关键字在圆形范围内检索
            //var region = new qq.maps.LatLng(39.916527,116.397128);
            //searchService.searchNearBy(keyword, region , 2000);
            //根据输入的关键字在矩形范围内检索
            //region = new qq.maps.LatLngBounds(new qq.maps.LatLng(39.936273,116.440043),new qq.maps.LatLng(39.896775,116.354212));
            //searchService.searchInBounds(keyword, region);

        }
        // searchKeyword()
        this.setState({ ready: true })
    }
    destory() {
        console.log('销毁地图！')
    }
    componentDidMount() {
        const center = new qq.maps.LatLng(22.56667490058734, 113.95134755566407)
        const mapInstance = new qq.maps.Map(document.getElementById('container'), {
            zoomControl: true, // 启用缩放控件
            //设置缩放控件的位置和样式
            zoomControlOptions: {
                //设置缩放控件的位置为相对左方中间位置对齐.
                position: qq.maps.ControlPosition.LEFT_CENTER,
                //设置缩放控件样式为仅包含放大缩小两个按钮
                style: qq.maps.ZoomControlStyle.SMALL
            },
            panControl: false,
            // mapTypeControl: false,
            center,
            zoom: 12
        });
        this.setState({ map: mapInstance }, this.init)
    }
    componentWillUnmount() {
        this.destory()
    }
    render() {
        const { ready, getCurrentLocationLoading, currentLocation, showSearchRegion, container, searchOpened, citylocation } = this.state
        const data = [
            {
                title: 'Ant Design Title 1',
            },
            {
                title: 'Ant Design Title 2',
            },
            {
                title: 'Ant Design Title 3',
            },
            {
                title: 'Ant Design Title 4',
            },
        ];
        const searchCityHandler = (value: string) => {
            if (value) {
                citylocation.searchCityByName(value)
            }
        }
        const cityClickHandler = (e: any) => {
            const { value } = e.target.dataset
            citylocation.searchCityByName(value)
        }
        const localtionSelectPanel = () => {
            const { currentLocation, getCurrentLocationLoading, searchOpened, provinces } = this.state
            const leftSpan = 4, rightSpan = 20
            return (
                <List bordered={true} style={{ overflowY: 'scroll', width: 450, height: '70vh', backgroundColor: '#fff' }}>
                    <List.Item>
                        <Row>
                            <Col >{currentLocation}{getCurrentLocationLoading ? null : <Button type="link">设置为默认城市</Button> }</Col>
                        </Row>
                    </List.Item>
                    <List.Item>
                        <Search
                            placeholder="请输入城市名称"
                            enterButton={searchOpened ? "搜索" : false}
                            size="small"
                            onSearch={value => searchCityHandler(value)}
                            style={{ width: ' 100%' }}
                        />
                    </List.Item>
                    <List.Item>
                        <Row>
                            <Col>热门</Col>
                        </Row>
                        <Row onClick={cityClickHandler}>
                            <Col>
                                <Button type="link" data-value="北京">北京</Button>
                                <Button type="link" data-value="上海">上海</Button>
                                <Button type="link" data-value="深圳">深圳</Button>
                                {/* <Button type="link" data-value="广州">广州</Button> */}
                                <Button type="link" data-value="武汉">武汉</Button>
                                <Button type="link" data-value="杭州">杭州</Button>
                                <Button type="link" data-value="成都">成都</Button>
                                <Button type="link" data-value="香港">香港</Button>
                            </Col>
                        </Row>
                    </List.Item>
                    <List.Item>
                        <Row>
                            <Col>
                                全国
                            </Col>
                        </Row>
                        <Row className="hidden">
                            <Col>
                                <RadioGroup>
                                    <Radio.Button>按省份</Radio.Button>
                                    <Radio.Button>按拼音</Radio.Button>
                                </RadioGroup>
                            </Col>
                        </Row>
                    </List.Item>
                    {/* <List.Item>
                        <Row onClick={cityClickHandler}>
                            <Col>
                                <Button type="link" value="中国" data-value="中国">中国</Button>
                            </Col>
                        </Row>
                    </List.Item> */}
                    {
                        provinces.map(province => {
                            let { label, value, children } = province
                            return <List.Item key={value}>
                                <Row onClick={cityClickHandler}>
                                    <Col span={leftSpan}>
                                        <Button type="link" block={true} data-value={label}>{label}</Button>
                                    </Col>
                                    <Col span={rightSpan}>{
                                        children && children.map(region => {
                                            let { label, value } = region
                                            return <Button type="link" key={value} data-value={label}>{label}</Button>
                                        })
                                    }</Col>
                                </Row>
                            </List.Item>
                        })
                    }
                </List>
            )
        }

        return <>
            {!ready && <Loading />}
            <div style={{ position: 'absolute', zIndex: 2 }}>
    
                {/* <Dropdown overlay={localtionSelectPanel} trigger={['click']}> */}
                <Button loading={getCurrentLocationLoading} onClick={() => this.setState({ showSearchRegion: !showSearchRegion })}>{currentLocation}<DownOutlined /></Button>
                {/* </Dropdown> */}
                {showSearchRegion && localtionSelectPanel()}
                {/* <Radio.Group value={mapTypeId} onChange={changeMapType}>
                    <Radio.Button value="ROADMAP">地图</Radio.Button>
                    <Radio.Button value="SATELLITE">卫星</Radio.Button>
                    <Radio.Button value="HYBRID">混合</Radio.Button>
                </Radio.Group> */}
            </div>
            <div
                id="container"
                ref={container}
                style={styles.map}>
            </div>
    
    
            <Affix
                target={() => container}
                style={{ position: 'absolute', top: 36, right: 20, zIndex: 2 }}
            >
                <Card>
                    <Button type="primary">重新获取位置</Button>
                    <List
                        itemLayout="horizontal"
                        dataSource={data}
                        renderItem={item => (
                            <List.Item>
                                <List.Item.Meta
                                    avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                    title={<a href="https://ant.design">{item.title}</a>}
                                    description="Ant Design, a design "
                                />
                            </List.Item>
                        )}
                    />
                </Card>
            </Affix>
            {/* 搜索 */}
            <Affix
                target={() => container}
                style={{
                    position: 'absolute',
                    top: 36,
                    left: '50%',
                    right: 0,
                    width: searchOpened ? 'calc(100vw / 5 * 2)' : '140px',
                    transform: 'translateX(-50%)',
                    transition: 'width 0.5s',
                    zIndex: 2
                }}
            >
                <Search
                    placeholder={searchOpened ? '用户名、地址' : '搜索'}
                    enterButton={searchOpened ? "搜索" : false}
                    size="large"
                    onFocus={() => this.setState({ searchOpened: true })}
                    onBlur={() => this.setState({ searchOpened: false })}
                    onSearch={value => console.log(value)}
                />
            </Affix>
        </>
    }
}
const mapStateToProps = (state: any) => ({
    provinces: state.appSettings.provinces
})
const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({

}, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(QQMap)