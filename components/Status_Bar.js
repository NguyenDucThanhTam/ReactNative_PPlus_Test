import React, { Component } from 'react';
import {View, StatusBar} from 'react-native';

export default class Status_Bar extends Component{
    render(){
        return (
            <View>
                <StatusBar
                    backgroundColor="red"
                    barStyle="light-content"
                />
            </View>
        );
    }
}