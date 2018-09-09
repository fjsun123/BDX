import React, { Component } from 'react';

import {
    StatusBar,
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
} from 'react-native';

export default class RoutingForum extends Component<Props> {
    static navigationOptions = {tabBarIcon: ({focused}) => {
            if (focused) {
                return (
                    <Image  style={styles.tabBarIcon} source={require('../../../res/images/a.png')}/> ); }
            return (
                <Image style={styles.tabBarIcon} source={require('../../../res/images/a1.png')}/> ); },
    };

    render() {
        return (
            <View>
                <Text>
                    asdasdayyyyyyyyyyyyyyyyyyyyyyy
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    tabBarIcon:{
        width:20,
        height:20
    }
});