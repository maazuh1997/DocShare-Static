import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Login, SignUp } from '../../Screens';

const Auth = ({ }) => {
    const AuthStack = createNativeStackNavigator();

    return (
        <AuthStack.Navigator
            screenOptions={{ headerShown: false }}
            initialRouteName={'Login'}>
            <AuthStack.Screen name="Login" component={Login} />
            <AuthStack.Screen name="SignUp" component={SignUp} />
        </AuthStack.Navigator>
    );
};


export default Auth