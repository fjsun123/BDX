import React, { Component } from 'react';
import {
    Text,
    View,
    Dimensions,
    Image
} from 'react-native';
import Carousel from 'react-native-looped-carousel';

const { width, height } = Dimensions.get('window');

export default class CarouselExample extends Component {

    constructor(props) {
        super(props);

        this.state = {
            size: { width, height },
        };
    }

    _onLayoutDidChange = (e) => {
        const layout = e.nativeEvent.layout;
        this.setState({ size: { width: layout.width, height: layout.height } });
    }

    render() {
        return (
            <View style={{ flex: 1 }} onLayout={this._onLayoutDidChange}>
                <Carousel
                    delay={2000}
                    style={this.state.size}
                    autoplay
                    pageInfo={false}
                    onAnimateNextPage={(p) => console.log(p)}



                    bullets={true}  //显示小圆点
                    bulletStyle={{backgroundColor: 'white', width: 13, height: 6, opacity:0.5 }} //未选中时小圆点的样式
                    chosenBulletStyle={{backgroundColor: 'white', width: 20, height: 6, }}//选中时小圆点的样式
                >
                    <View style={[  this.state.size]}>
                        <Image  style={[  this.state.size,{    borderTopLeftRadius:10,
                            borderTopRightRadius:10}]}  source={require('../../res/images/tim5g.jpg')}/>
                    </View>
                    <View style={[  this.state.size]}>
                        <Image  style={[  this.state.size,{    borderTopLeftRadius:10,
                            borderTopRightRadius:10}]}  source={require('../../res/images/tim5g.jpg')}/>
                    </View>
                    <View style={[  this.state.size]}>
                        <Image   style={[  this.state.size,{    borderTopLeftRadius:10,
                            borderTopRightRadius:10}]} source={require('../../res/images/sss.jpg')}/>
                    </View>
                </Carousel>
            </View>
        );
    }
}