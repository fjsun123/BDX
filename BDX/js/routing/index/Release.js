import React, { Component } from 'react';

import {
    StatusBar,
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
} from 'react-native';

export default class RoutingRelease extends Component<Props> {
    static navigationOptions = {tabBarIcon: ({focused}) => {
            if (focused) {
                return (
                    <Image  style={styles.tabBarIcon} source={require('../../../res/images/d1.png')}/> ); }
            return (
                <Image style={styles.tabBarIcon} source={require('../../../res/images/d.png')}/> ); },
    };
    render() {
        return (
            <View>
                <Text>
                    asdasdycccccccccccc
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    tabBarIcon:{
        width:21,
        height:20
    }
});