import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, Button } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#000080',
		alignItems: 'center',
		justifyContent: 'center'
	},
	title: {
		fontSize: 50,
		color: '#fff'
	},
	text: {
		fontSize: 25,
		color: '#fff'
	},
	link: {
		textDecorationLine: 'underline',
		color: 'silver'
	}
});

const LoginScreen = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Blue Notes {'\n'}</Text>
			<Input
				style={styles.text}
				placeholder=" Email"
				leftIcon={<Icon name="envelope" size={24} color="#fff" />}
			/>
			<Input
				style={styles.text}
				placeholder=" Password"
				leftIcon={<Icon name="key" size={24} color="#fff" />}
			/>

			<Button title="Login" type="solid" onPress={() => Actions.home()} />

			<Text style={styles.text}>
				{'\n'}
				Or Register{' '}
				<Text style={styles.link} onPress={() => Actions.register()}>
					Here
				</Text>
			</Text>
		</View>
	);
};

export default LoginScreen;
