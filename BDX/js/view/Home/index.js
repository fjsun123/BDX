import React, { Component } from 'react';
import {
    StatusBar,
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ActivityIndicator,
    Dimensions,
    ScrollView,
    Image,
    TouchableOpacity
} from 'react-native';

import ParallaxView from 'react-native-parallax-view';
import WeatherChart from "../../Component/weatherChart";
import CarouselExample from "../../Component/CarouselMap";
import WeatherChartAll_b from "../../Component/weatherChartAll_b";
import Line from "../../Component/line";
import WeatherChartAll_yuan from "../../Component/weatherChartAll_yuan";


const { width, height } = Dimensions.get('window');

export default class HomeIndex extends Component<Props> {
    constructor(props, context) {
        super(props, context);
        this.state = {
        };
    }
    _handlePress() {
        alert('Pressed!');
    }

    topIndicatorRender(pulling, pullok, pullrelease) {
        const hide = {position: 'absolute', left: 10000};
        const show = {position: 'relative', left: 0};
        setTimeout(() => {
            if (pulling) {
                this.txtPulling && this.txtPulling.setNativeProps({style: show});
                this.txtPullok && this.txtPullok.setNativeProps({style: hide});
                this.txtPullrelease && this.txtPullrelease.setNativeProps({style: hide});
            } else if (pullok) {
                this.txtPulling && this.txtPulling.setNativeProps({style: hide});
                this.txtPullok && this.txtPullok.setNativeProps({style: show});
                this.txtPullrelease && this.txtPullrelease.setNativeProps({style: hide});
            } else if (pullrelease) {
                this.txtPulling && this.txtPulling.setNativeProps({style: hide});
                this.txtPullok && this.txtPullok.setNativeProps({style: hide});
                this.txtPullrelease && this.txtPullrelease.setNativeProps({style: show});
            }
        }, 1);
        return (
            <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: 60}}>
                <ActivityIndicator size="small" color="gray" />
            </View>
        );
    }

    render() {

        return (
            <ParallaxView
                ref={(Component) => {this._scrollView = Component}}
                backgroundSource={require('../../../res/images/sss.jpg')}
                windowHeight={350}
                header={(
                    <View style={[styles.header,styles.CarouselExample,{marginTop:10, }]}>
                        <CarouselExample/>
                    </View>
                )}>

                <View style={[styles.ranking,{width: Dimensions.get('window').width,}]}>
                    <View style={[styles.ranking_b,{ width: Dimensions.get('window').width,flexDirection:'row'}]}>
                        <View style={[{ flexDirection:'row',flex: 1}]}>

                            <Image style={{marginLeft:16,width:25,height:25}} source={require('../../../res/images/wewe.png')}>

                            </Image>
                            <Text style={{paddingLeft:6,paddingTop:8,color:'#787D82',fontFamily:'courier',fontSize:14}}>
                                福建.
                            </Text>
                            <Text style={{paddingLeft:6,paddingTop:11,color:'#787D82',fontFamily:'courier',fontSize:11}}>
                                厦门
                            </Text>
                        </View>
                        <View style={{paddingRight:16}}>

                        </View>

                    </View>

                </View>
               <Line/>
                <View style={{backgroundColor: '#EEEEEE'}}>

                    <View style={{flexDirection:'row',paddingTop:20,paddingLeft:15,paddingRight:15}}>
                        <Text style={{color:'#243353',fontSize:18,flex:1}}>
                            本地狭义榜
                        </Text>
                        <Text style={{color:'#989CA7',fontSize:12}}>
                            全部 >
                        </Text>
                    </View>

                    <View style={{flexDirection:'row',height:30,paddingLeft:15,paddingRight:15, alignItems: 'center',}}>
                        <Text style={{color:'#405363',fontSize:12,flex:1,}}>
                            "江湖无情，自己掌握命运"
                        </Text>
                    </View>

                    <View style={{flexDirection:'row',height:70,paddingLeft:15,paddingRight:15, alignItems: 'center' }}>
                        <View style={{flexDirection:'column'}}>
                            <Text style={{color:'#FFC016',fontSize:20,fontWeight:'bold'}}>1</Text>
                            <Text style={{color:'#FFC016',fontSize:10,fontWeight:'bold',lineHeight:10}}>st</Text>
                        </View>
                        <View style={{ width:90,height:60,alignItems: 'center',justifyContent:'center'}}>
                            <View style={{
                                borderWidth:1,
                                borderColor:'gray',
                                backgroundColor:'white',width:50,height:50,borderRadius:50,alignItems: 'center',justifyContent:'center'}}>
                                <View style={{ width:40,height:40,borderRadius:40,overflow:'hidden'}}>
                                    <Image  style={[  {    width:40,height:40,borderRadius:40,}]}  source={require('../../../res/images/sss.jpg')}/>
                                </View>
                            </View>

                        </View>
                        {/*右边*/}
                        <View style={{flexDirection:'row',height:60, alignItems: 'center' }}>
                            <View>
                                <Text style={{color:'#405363',fontSize:13}}>于诚</Text>
                                <Text style={{color:'#405363',fontSize:12}}>"我就是我不一样的烟火"</Text>
                                <Text style={{color:'#AEBFCD',fontSize:11}}>500</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{flexDirection:'row',height:70,paddingLeft:15,paddingRight:15, alignItems: 'center' }}>
                        <View style={{flexDirection:'column'}}>
                            <Text style={{color:'#AFBDC9',fontSize:20,fontWeight:'bold'}}>2</Text>
                            <Text style={{color:'#AFBDC9',fontSize:10,fontWeight:'bold',lineHeight:10}}>nd</Text>
                        </View>
                        <View style={{ width:90,height:60,alignItems: 'center',justifyContent:'center'}}>
                            <View style={{
                                borderWidth:1,
                                borderColor:'gray',
                                backgroundColor:'white',width:50,height:50,borderRadius:50,alignItems: 'center',justifyContent:'center'}}>
                                <View style={{ width:40,height:40,borderRadius:40,overflow:'hidden'}}>
                                    <Image  style={[  {    width:40,height:40,borderRadius:40,}]}  source={require('../../../res/images/sss.jpg')}/>
                                </View>
                            </View>

                        </View>
                        {/*右边*/}
                        <View style={{flexDirection:'row',height:60, alignItems: 'center' }}>
                            <View>
                                <Text style={{color:'#405363',fontSize:13}}>于诚</Text>
                                <Text style={{color:'#405363',fontSize:12}}>"我就是我不一样的烟火"</Text>
                                <Text style={{color:'#AEBFCD',fontSize:11}}>500</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{flexDirection:'row',height:70,paddingLeft:15,paddingRight:15, alignItems: 'center' }}>
                        <View style={{flexDirection:'column'}}>
                            <Text style={{color:'#DB8451',fontSize:20,fontWeight:'bold'}}>3</Text>
                            <Text style={{color:'#DB8451',fontSize:10,fontWeight:'bold',lineHeight:10}}>rd</Text>
                        </View>
                        <View style={{ width:90,height:60,alignItems: 'center',justifyContent:'center'}}>
                            <View style={{
                                borderWidth:1,
                                borderColor:'gray',
                                backgroundColor:'white',width:50,height:50,borderRadius:50,alignItems: 'center',justifyContent:'center'}}>
                                <View style={{ width:40,height:40,borderRadius:40,overflow:'hidden'}}>
                                    <Image  style={[  {    width:40,height:40,borderRadius:40,}]}  source={require('../../../res/images/sss.jpg')}/>
                                </View>
                            </View>

                        </View>
                        {/*右边*/}
                        <View style={{flexDirection:'row',height:60, alignItems: 'center' }}>
                            <View>
                                <Text style={{color:'#405363',fontSize:13}}>于诚</Text>
                                <Text style={{color:'#405363',fontSize:12}}>"我就是我不一样的烟火"</Text>
                                <Text style={{color:'#AEBFCD',fontSize:11}}>500</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{flexDirection:'row',height:70,paddingLeft:15,paddingRight:15, alignItems: 'center' }}>
                        <View style={{flexDirection:'column'}}>
                            <Text style={{color:'#7485A3',fontSize:20,fontWeight:'bold'}}>4</Text>
                        </View>
                        <View style={{ width:90,height:60,alignItems: 'center',justifyContent:'center'}}>
                            <View style={{
                                borderWidth:1,
                                borderColor:'gray',
                                backgroundColor:'white',width:50,height:50,borderRadius:50,alignItems: 'center',justifyContent:'center'}}>
                                <View style={{ width:40,height:40,borderRadius:40,overflow:'hidden'}}>
                                    <Image  style={[  {    width:40,height:40,borderRadius:40,}]}  source={require('../../../res/images/sss.jpg')}/>
                                </View>
                            </View>

                        </View>
                        {/*右边*/}
                        <View style={{flexDirection:'row',height:60, alignItems: 'center' }}>
                            <View>
                                <Text style={{color:'#405363',fontSize:13}}>于诚，img</Text>
                                <Text style={{color:'#405363',fontSize:12}}>"我就是我不一样的烟火"</Text>
                                <Text style={{color:'#AEBFCD',fontSize:11}}>500</Text>
                            </View>
                        </View>
                    </View>

                    {/*天气图表*/}
                    <Line/>
                    {/*两个图表*/}
                    <View style={{height:160,flexDirection:'row',}}>
                        <View style={{height:160,flex:1,paddingTop:15,alignItems:'center',justifyContent:'center'}}>

                                <WeatherChart/>

                        </View>
                        <View style={[ {height:160,flex:1, alignItems:'center',justifyContent:'center',paddingTop:15}]}>
                            <WeatherChart/>
                        </View>
                    </View>

                    <Line/>

                    <View style={{height:160,flexDirection:'row',}}>
                        <View style={{height:160,flex:1,paddingTop:15,alignItems:'center',justifyContent:'center'}}>
                            <WeatherChartAll_yuan/>
                        </View>
                        <View style={[ {height:160,flex:1, alignItems:'center',justifyContent:'center',paddingTop:15}]}>
                            <WeatherChartAll_yuan/>
                        </View>
                    </View>

                    <Line/>

                    <View style={{height:160,flexDirection:'row',}}>
                        <View style={{height:160,flex:1,paddingTop:15,alignItems:'center',justifyContent:'center'}}>
                            <WeatherChartAll_b/>
                        </View>
                    </View>
                    <View>

                    </View>

                </View>

            </ParallaxView>

        );
    }
}

const styles = StyleSheet.create({

    header: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#353535'
    },
    loremBody: {
        paddingHorizontal: 10,
        paddingVertical: 6
    },
    loremText: {
        color: '#353535',
        paddingBottom: 10
    },

    ranking:{
        // 排行

    },
    ranking_b:{
        flexDirection:'row',
        paddingTop:10,
        height:40,
        backgroundColor:'white',
        borderTopLeftRadius:5,
        borderTopRightRadius:5,
        position:'relative',
        top:-5
    },
    CarouselExample:{
        // 轮播图

    },
    tabBarIcon:{
        width:20,
        height:20
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#F5FCFF',
        fontFamily:'courier'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});