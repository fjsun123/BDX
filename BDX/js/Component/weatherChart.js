import React, { Component } from 'react';

import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Platform
} from 'react-native';

import Echarts from 'native-echarts';
export default class WeatherChart extends Component {
    render() {
        const option = {
            title : {
                text: '',
            },

            axisLabel: {
                textStyle: {
                    marginBottom:11,
                    fontSize: 7,
                }
            },

            series: [
                {
                    name: '业务指标',
                    type: 'gauge',
                    min: 0,
                    max: 45,
                    splitNumber: 9,
                    radius: '100%',
                    axisLine: { // 坐标轴线
                        lineStyle: { // 属性lineStyle控制线条样式
                            width: 4,
                            shadowColor: '#8CF6FB', //默认透明
                            shadowBlur: 10
                        }
                    },
                    axisTick: { // 坐标轴小标记
                        length: 8, // 属性length控制线长
                        lineStyle: { // 属性lineStyle控制线条样式
                            color: 'auto',
                            shadowColor: '#fff', //默认透明
                            shadowBlur: 10
                        }
                    },
                    splitLine: { // 分隔线
                        length: 10, // 属性length控制线长
                        lineStyle: { // 属性lineStyle（详见lineStyle）控制线条样式
                            width: 3,
                            color: '#fff',
                            shadowColor: '#fff', //默认透明
                            shadowBlur: 10
                        }
                    },

                    detail: {formatter:'{value}%'},
                    data: [{value: 10, name: '气温度'}]
                }
            ]
        };
        return (
                <Echarts option={option} height={150} width={150} />
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex:1,
    },


});