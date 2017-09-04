import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { connect } from 'react-redux';
import firebase from 'firebase';

import store from '../../stores/index';
import { treeGrow } from '../../actions/action_mango';
import { Card, CardSection, Button } from '../common';

class HomeScreen extends Component {
	static navigationOptions = {
		title: 'Mangotree Games'
	}

	render() {
		return (
				<Card>
					<CardSection>
						<Text>This is Groot. He is {this.props.age} years old</Text>
					</CardSection>
					<CardSection>
						<Image style={styles.imageStyle} source={require('../assets/images/0.png')} />
					</CardSection>
					<CardSection>
						<Button onPress={() => this.props.treeGrow()}>
							Emulate
						</Button>
					</CardSection>
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


const styles = {
	containerStyle: {
		justifiyContent: 'center',
		alignItems: 'center'
	},
	imageStyle: {
		height: 300,
		flex: 1,
		width: null
	}
}

function mapStateToProps(state) {
	return {
		age: state.mangoStore
	}
}

function mapDispatchToProps(dispatch) {
	return {
		treeGrow: () => dispatch(treeGrow())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);