import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import ListScreen from "../src/screens/ListScreen";
import LoginScreen from "../src/screens/LoginScreen";
import RegisterScreen from "../src/screens/RegisterScreen";
import HomeScreen from "../src/screens/HomeScreen";
// import { Header } from "../src/components/Header";

const Stack = createStackNavigator();

function StackNavigation() {
    return (
        <Stack.Navigator initialRouteName="Login" screenOptions={{headerShown:false}}>
            {/* <Stack.Screen name="Header" component={Header} options={Stack}/> */}
            <Stack.Screen name="List" component={ListScreen}/>
            <Stack.Screen name="Login" component={LoginScreen}/>
            <Stack.Screen name="Register" component={RegisterScreen}/>
            <Stack.Screen name="Home" component={HomeScreen}/>
        </Stack.Navigator>
    );
}

export default StackNavigation;