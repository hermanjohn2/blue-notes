import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center'
	}
});

const RegisterScreen = () => {
	return (
		<View style={styles.container}>
			<Text>Register</Text>
			<StatusBar style="auto" />
		</View>
	);
};

export default RegisterScreen;
