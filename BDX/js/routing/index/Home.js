import React, { Component } from 'react';

import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

import {StackNavigator, TabBarTop, TabNavigator,TabBarBottom,createStackNavigator} from 'react-navigation';

import HomeIndex from "../../view/Home/index";

import Map from "../../view/Home/map";

export default class RoutingHome extends Component<Props> {
    static navigationOptions = {tabBarIcon: ({focused}) => {
            if (focused) {
                return (
                    <Image  style={styles.tabBarIcon} source={require('../../../res/images/c.png')}/> ); }
            return (
                <Image style={styles.tabBarIcon} source={require('../../../res/images/c1.png')}/> ); },
    };
    render() {
        return (
            <Navigator/>
        );
    }
}


const TabRouteConfigs = {  // 表示各个页面路由配置,让导航器知道需要导航的路由对应的页面
    Home: {  // 路由名称
        screen: HomeIndex,  // 对应的路由页面
        navigationOptions: {  // 指定路由页面的配置选项
            // tabBarLabel: '新闻',   // 表示tab的标题
            title: '首页',  // 可用作头部标题 headerTitle ，或者Tab标题 tabBarLabel
        },
    },
    News: {
        screen: Map,
        navigationOptions: {  // 指定路由页面的配置选项
            // tabBarLabel: '新闻',   // 表示tab的标题
            title: '地图',  // 可用作头部标题 headerTitle ，或者Tab标题 tabBarLabel
        },
    }


};
const TabNavigatorConfigs = {
    swipeEnabled: false,
    initialRouteName: 'Home',  // 初始显示的Tab对应的页面路由名称
    tabBarComponent:TabBarTop , // Tab选项卡组件，有 TabBarBottom 和 TabBarTop 两个值，在iOS中默认为 TabBarBottom ，在Android中默认为 TabBarTop 。
    tabBarPosition: 'top', // 设置选项卡的位置，在顶部或是底部，有'top'与'bottom'可选
    lazy: true,  // 是否懒加载页面
    tabBarOptions: {
        // 头部标题栏
        activeTintColor: '#4B44D0',
        inactiveTintColor: '#B5B5B5',
        showLabel: true,
        upperCaseLabel: false,
        pressColor: '#788493',
        pressOpacity: 0.8,
        style: {
            height:40,
            backgroundColor: '#fff',
            paddingBottom: 1,
            borderTopWidth: 0.2,
            paddingTop:1,
            borderTopColor: '#ccc',
        },
        labelStyle: {
            fontSize: 16,
            margin: 1,
            paddingTop:0
        },
        //tab 页指示符的样式 (tab页下面的一条线).
        indicatorStyle: {height: 1,backgroundColor:'#9DA5AD'},
    } // 在属性TabBarBottom与TabBarTop中有所不同

};

const TabNavigatorConfigssss = {
    // 初始显示的Tab对应的页面路由名称


};

const Tab = TabNavigator(TabRouteConfigs, TabNavigatorConfigs,TabNavigatorConfigssss);
const StackRouteConfigs = {
    Tab: {
        screen: Tab,
    }
};
const StackNavigatorConfigs = {
    // 表示导航器的配置，包括导航器的初始页面、各个页面之间导航的动画、页面的配置选项等等
    headerMode: 'none',
};
// StackNavigator 导航组件，用来实现各个界面跳转
const Navigator = StackNavigator(StackRouteConfigs,StackNavigatorConfigs);

console.disableYellowBox = true;

const styles = StyleSheet.create({
    tabBarIcon:{
        width:20,
        height:20
    }
});
