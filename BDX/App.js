/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
// 路由
import RoutingIndex from "./js/routing/index/Index";



export default class App extends Component<Props> {

  render() {

    return (
            <RoutingIndex/>
    );
  }
}
