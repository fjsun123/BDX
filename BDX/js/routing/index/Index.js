import React, { Component } from 'react';

import {
    StatusBar,
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
} from 'react-native';
import RoutingPaging from "./Paging";

export default class RoutingIndex extends Component<Props> {
    render() {
        return (
            <RoutingPaging/>
        );
    }
}
