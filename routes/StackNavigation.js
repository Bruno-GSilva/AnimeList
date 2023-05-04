import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

// paginas iniciais
import LoginScreen from "../src/screens/LoginScreen";
import RegisterScreen from "../src/screens/RegisterScreen";
import HomeScreen from "../src/screens/HomeScreen";
// pagina do anime
import { AnimeScreen } from "../src/screens/AnimeScreen";
// menu de navegacao
import ListScreen from "../src/screens/ListScreen";
import CompleteScreen from "../src/screens/CompleteScreen";
import AbandonedScreen from "../src/screens/AbandonedScreen";
import WatchingScreen from "../src/screens/watchingScreen";

const Stack = createStackNavigator();

function StackNavigation() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Anime" component={AnimeScreen} />
      <Stack.Screen name="List" component={ListScreen} />
      <Stack.Screen name="Complete" component={CompleteScreen} />
      <Stack.Screen name="Abandoned" component={AbandonedScreen} />
      <Stack.Screen name="Watching" component={WatchingScreen} />
    </Stack.Navigator>
  );
}

export default StackNavigation;