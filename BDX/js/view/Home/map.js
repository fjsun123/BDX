import React, { Component } from 'react';
import {

    StyleSheet,

} from 'react-native';

import {MapView, MultiPoint}  from 'react-native-amap3d'
import AMapLocation from "react-native-amap-geolocation"


export default class Map extends Component<Props> {
    _points = Array(1000).fill(0).map(i => ({
        latitude: 39.5 + Math.random(),
        longitude: 116 + Math.random(),
    }))
    _onItemPress = point => Alert.alert(this._points.indexOf(point).toString())
    render() {
        return (
            <MapView zoomLevel={10} style={[StyleSheet.absoluteFill,{  flex:1}]}>
                <MultiPoint
                    image='point'
                    points={this._points}
                    onItemPress={this._onItemPress}
                />
            </MapView>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
});
