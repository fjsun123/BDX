import React, { Component } from 'react';

import {
    StatusBar,
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
} from 'react-native';
import {StackNavigator, TabBarTop, TabNavigator,createStackNavigator} from 'react-navigation';


import RoutingHome from "./Home";
import RoutingRelease from "./Release";
import RoutingMy from "./My";
import RoutingForum from "./Forum";

type Props = {};

export default class RoutingPaging extends Component<Props> {
    render() {
        return (
            <View style={{flex:1}}>
                <StatusBar
                    animated={true}
                    backgroundColor="white"
                    barStyle="light-content"
                />
                <Navigator
                    initialRoute={{statusBarHidden: true}}
                    renderScene={(route, navigator) =>
                        <View>
                            <StatusBar hidden={route.statusBarHidden} />
                        </View>
                    }
                />
            </View>
        );
    }
}

const TabRouteConfigs = {  // 表示各个页面路由配置,让导航器知道需要导航的路由对应的页面
    Home: {  // 路由名称
        screen: RoutingHome,
        navigationOptions:({navigation}) => ({
            tabBarLabel:'首页',
        }),
    },
    News: {
        screen:RoutingForum,
        navigationOptions:({navigation}) => ({
            tabBarLabel:'发布',
        }),
    }
    ,
    More: {
        screen: RoutingRelease,
        navigationOptions: {

            tabBarLabel: '技术',
        },
    },
    My: {
        screen: RoutingMy,
        navigationOptions: {
            // tabBarLabel: '我的',
            title: '我的',
        },
    },
};
const TabNavigatorConfigs = {
    swipeEnabled: false,
    showIcon: true,
    initialRouteName: 'Home',  // 初始显示的Tab对应的页面路由名称
    tabBarComponent: TabBarTop, // Tab选项卡组件，有 TabBarBottom 和 TabBarTop 两个值，在iOS中默认为 TabBarBottom ，在Android中默认为 TabBarTop 。
    tabBarPosition: 'bottom', // 设置选项卡的位置，在顶部或是底部，有'top'与'bottom'可选
    lazy: true,  // 是否懒加载页面
    tabBarOptions: {
        activeTintColor: '#A1A7A5',
        inactiveTintColor: '#B5B5B5',
        showIcon: true,
        showLabel: true,
        upperCaseLabel: false,
        pressColor: '#788493',
        pressOpacity: 0.8,
        style: {
            backgroundColor: '#fff',
            paddingBottom: 1,
            borderTopWidth: 0.2,
            paddingTop:1,
            borderTopColor: '#ccc',
        },
        labelStyle: {
            fontSize: 11,
            margin: 1
        },
        //tab 页指示符的样式 (tab页下面的一条线).
        indicatorStyle: {height: 0},

    } // 在属性TabBarBottom与TabBarTop中有所不同

};
const Tab = TabNavigator(TabRouteConfigs, TabNavigatorConfigs);
const StackRouteConfigs = {
    Tab: {
        screen: Tab,
    }
};
const StackNavigatorConfigs = {  // 表示导航器的配置，包括导航器的初始页面、各个页面之间导航的动画、页面的配置选项等等
    headerMode: 'none'
};
// StackNavigator 导航组件，用来实现各个界面跳转
const Navigator = StackNavigator(StackRouteConfigs, StackNavigatorConfigs);

console.disableYellowBox = true;
