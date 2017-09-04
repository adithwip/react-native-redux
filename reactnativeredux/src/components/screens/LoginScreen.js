import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';

import {  
	Button, 
	CardSection, 
	Spinner 
} from '../common';
import LoginForm from '../LoginForm';
import HomePage from '../Homepage';

class LoginScreen extends Component {
	state = {
		loggedIn: null
	}

	componentWillMount() {
		firebase.initializeApp({
			apiKey: 'AIzaSyAwcUWfZlYO32f-bt4NGiy1Gqn3f3nZY3I',
			authDomain: 'loginappreactnative.firebaseapp.com',
			databaseURL: 'https://loginappreactnative.firebaseio.com',
			projectId: 'loginappreactnative',
			storageBucket: 'loginappreactnative.appspot.com',
			messagingSenderId: '780713378147'
		});

		firebase.auth().onAuthStateChanged((user) => {
			console.log('onAuthStateChanged: ', user);
			if (user) {
				this.setState({ loggedIn: true });
			} else {
				this.setState({ loggedIn: false });
			}
		})
	}

	renderContent() {
		switch (this.state.loggedIn) {
			case true:
				return (
						<CardSection>
							<HomePage />
						</CardSection>
				)
			case false:
				return <LoginForm />
			default:
				return (
					<CardSection>
						<Spinner size="large" feedback="Doing some stuff for you..." />
					</CardSection>
				)
		}
	}

	static navigationOptions = {
		title: 'Log in'
	}

	render() {
		return(
			<View>
				{this.renderContent()}
			</View>
		)
	}
}

export default LoginScreen;