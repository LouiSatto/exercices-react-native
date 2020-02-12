import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default class App extends Component {
	render() {
		return (

			<View style={Styles.container}>
				<Text style={Styles.f20}>App!</Text>
			</View>

		)
		
	}
}

const Styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	f20:{
		fontSize: 40
	}
})