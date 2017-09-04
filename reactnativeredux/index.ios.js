import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { StackNavigator } from 'react-navigation';

import HomePage from './src/components/Homepage';
import MainPage from './src/components/MainPage';
import LoginScreen from './src/components/screens/LoginScreen';

const reactnativeredux = StackNavigator({
	Login: { screen: LoginScreen},
	Home: { screen: HomePage },
	MainPage: { screen: MainPage }
})

AppRegistry.registerComponent('reactnativeredux', () => reactnativeredux);
