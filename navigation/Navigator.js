import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Scene, Router, Stack, Tabs } from 'react-native-router-flux';

import Login from '../screens/LoginScreen';
import Register from '../screens/RegisterScreen';
import Home from '../screens/HomeScreen';

const Navigator = () => (
	<Router>
		<Stack key="root">
			<Scene key="login" component={Login} title="Login" hideNavBar />
			<Scene key="register" component={Register} title="Register" />
			<Scene key="home" component={Home} title="Home" />
		</Stack>
	</Router>
);

export default Navigator;
