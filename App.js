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
  View,
  StatusBar, Header
} from 'react-native';

import { StackNavigator } from 'react-navigation';
import {
  Router,
  Scene,
} from 'react-native-router-flux';
//Import Screen
import Status_Bar from "./components/Status_Bar";
import Nav_ActionBar from "./components/Nav_ActionBar";
// import Screen_One from "./components/Screen_One";
// import Screen_Two from "./components/Screen_Two";

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends React.Component {

  render() {
    return (
      <Status_Bar /> ,
      
      <View style={styles.container}>
        <Nav_ActionBar />
        </View>
    );
  }
}

const SimpleApp = StackNavigator({
  Home: { screen: App },
});

const styles = StyleSheet.create({


});
