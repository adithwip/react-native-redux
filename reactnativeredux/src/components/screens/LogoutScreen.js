import React, { Component } from 'react';
import { Text } from 'react-native';

import {
	Button,
	Card,
	CardSection,
	Input,
	Spinner
} from '../common';

class LogoutScreen extends Component {
	render() {
		return (
			<Card>
				<CardSection>
					<Button
						onPress={() => firebase.auth().signOut()}
					>
						Log out
					</Button>
				</CardSection>
			</Card>
		)
	}
}