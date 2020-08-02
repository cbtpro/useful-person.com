import React from 'react'
import Loading from '../loading'
// import UserLocationWindow from './UserLocationWindow'


const styles = {
    map: {
        width: '100%',
        height: 'calc(100vh - 220px)'
    }
}
interface IProps {}
interface IState {
    ready: boolean
}
class QQMap extends React.Component<IProps, IState> {
    map: any
    constructor(props: IProps) {
        super(props)
        this.state = {
            ready: false
        }
    }
    init() {
        var center = new qq.maps.LatLng(22.56667490058734, 113.95134755566407)
        this.map = new qq.maps.Map(document.getElementById('container'), {
            center,
            zoom: 12
        });
        //设置城市信息查询服务
        var citylocation = new qq.maps.CityService();
        //请求成功回调函数
        citylocation.setComplete((result: Result) => {
            const { name, latLng } = result.detail
            this.map.setCenter(latLng);
            this.showUserLocationMarker(latLng, name)
        });
        //请求失败回调函数
        citylocation.setError(function () {
            alert("出错了，请输入正确的经纬度！！！")
        });
        citylocation.searchLocalCity()
    }
    showUserInfoWindow = (center: LngLat, city?: string) => {
        return new qq.maps.InfoWindow({
            map: this.map,
            position: center,
            content: `
                <div class="user-location-window">
                    <p><button>设置${city || '当前'}</button>为常用位置。</p>
                </div>
            `,
            visible: true
        })
    }
    showUserLocationMarker = (center: LngLat, name?: string) => {
        const marker = new qq.maps.Marker({
            position: center,
			animation: qq.maps.MarkerAnimation.DROP,
            map: this.map
        })
        const info = this.showUserInfoWindow(center, name)
        qq.maps.event.addListener(marker, 'click', function() {
            info.open(); 
            info.setPosition(center); 
        })
    }
    destory = () => {
        console.log('销毁地图！')
    }
    componentDidMount() {
        this.setState({ ready: true })
        this.init()
    }
    render() {
        const { ready } = this.state
        return <>
            { !ready && <Loading /> }
            <div id="container" style={styles.map}></div>
        </>
    }
}

export default QQMap
export { QQMap }