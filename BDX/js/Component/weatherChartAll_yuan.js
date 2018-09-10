import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Platform
} from 'react-native';

import Echarts from 'native-echarts';

export default class WeatherChartAll_yuan extends Component {

    render() {
        const option =  {
            legend: {
                orient: 'vertical',
                x: 'left',
                data:['总量','使用率']
            },
            series: [
                {
                    name:'访问来源',
                    type:'pie',
                    radius: ['50%', '70%'],
                    avoidLabelOverlap: false,
                    label: {
                        normal: {
                            show: false,
                            position: 'center'
                        },
                        emphasis: {
                            show: true,
                            textStyle: {
                                fontSize: '30',
                                fontWeight: 'bold'
                            }
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data:[
                        {value:335, name:'直接访问'},
                        {value:310, name:'邮件营销'},

                    ]
                }
            ]
        };
        return (
                <Echarts option={option} height={150} width={150} />
        );
    }
}
