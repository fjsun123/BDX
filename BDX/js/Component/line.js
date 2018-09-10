import React, { Component } from 'react';
import {
    StatusBar,
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
} from 'react-native';


export default class Line extends Component<Props> {
    render() {
        return (
            <View>
                <View style={{height:6,backgroundColor:'#EAEAEA'}}>
                    <View style={{height:1,backgroundColor:'#D2D2D2'}}>
                    </View>
                </View>
                <View style={{height:1,backgroundColor:'#E5E5E5'}}>
                </View>
            </View>
        );
    }
}
