import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import ListScreen from "../src/screens/ListScreen";
import LoginScreen from "../src/screens/LoginScreen";
import RegisterScreen from "../src/screens/RegisterScreen";
import HomeScreen from "../src/screens/HomeScreen";

const Stack = createStackNavigator();

function StackNavigation() {
    return (
        <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown:false}}>
            <Stack.Screen name="List" component={ListScreen}/>
            <Stack.Screen name="Login" component={LoginScreen}/>
            <Stack.Screen name="Register" component={RegisterScreen}/>
            <Stack.Screen name="Home" component={HomeScreen}/>
        </Stack.Navigator>
    );
}

export default StackNavigation;