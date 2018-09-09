import React, { Component } from 'react';

import {
    StatusBar,
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
} from 'react-native';

export default class RoutingMy extends Component<Props> {
    static navigationOptions = {tabBarIcon: ({focused}) => {
            if (focused) {
                return (
                    <Image  style={styles.tabBarIcon} source={require('../../../res/images/b.png')}/> ); }
            return (
                <Image style={styles.tabBarIcon} source={require('../../../res/images/b1.png')}/> ); },
    };
    render() {
        return (
            <View>
                <Text>
                    asdannnnnnnn
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    tabBarIcon:{
        width:23,
        height:23
    }
});