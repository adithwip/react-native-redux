import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';

import store from '../stores/index';
import HomeScreen from './screens/Homescreen';


class HomePage extends Component {
	render() {
		return (
			<Provider store={store}>
				<View>
					<HomeScreen />
				</View>
			</Provider>
		)
	}
}


export default HomePage;