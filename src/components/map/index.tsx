// @ts-nocheck
import React from 'react'

const styles = {
    width: '100%',
    height: 'calc(100vh - 220px)'
}
class QQMap extends React.Component {
    init() {
        var center = new qq.maps.LatLng(22.56667490058734,113.95134755566407)
        var map = new qq.maps.Map(document.getElementById('container'), {
            center,
            zoom: 8
        });
        var infoWin = new qq.maps.InfoWindow({
            map: map
        });
        infoWin.open();
        infoWin.setContent('生而不庸');
        infoWin.setPosition(map.getCenter());
        //setMap
        var mapM = document.getElementById("mapM");
        qq.maps.event.addDomListener(mapM, "click", function () {
            if (infoWin.getMap()) {
                infoWin.setMap(null);
            } else {
                infoWin.setMap(map);
            }
        });
        //setVisible
        var flag = true;
        var setP = document.getElementById("setP");
        var latLng = new qq.maps.LatLng(39.908701, 116.397497);
        qq.maps.event.addDomListener(setP, "click", function () {
            infoWin.setMap(map);
            if (flag) {
                flag = false;
                infoWin.setPosition(latLng);
            } else {
                flag = true;
                infoWin.setPosition(center);
            }
        });
    }
    destory = () => {
        console.log('销毁地图！')
    }
    componentDidMount() {
        this.init()
    }
    render() {
        return <>
            <div id="container" style={styles}></div>
            <div id="info">
                <button id="mapM" className="btn">setMap</button>
                <button id="setP" className="btn">setPosition</button>
            </div>
        </>
    }
}

export default QQMap
export { QQMap }