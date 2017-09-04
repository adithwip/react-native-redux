import React, { Component } from 'react';
import { View, Text } from 'react-native';

class MainPage extends Component {
	render() {
		return (
			<View>
				<Text>Hello, this is mainpage!</Text>
			</View>
		)
	}
}

const styles = {
	containerStyle: {
		justifiyContent: 'center',
		alignItems: 'center'
	}
}

export default MainPage;