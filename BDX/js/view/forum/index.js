import React, { Component } from 'react';
import {
    StatusBar,
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import Forum_box from "../../Component/forum_box";
export default class ForumIndex extends Component<Props> {
    render() {
        return (
            <Forum_box/>
        );
    }
}
