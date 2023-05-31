import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigation from "./routes/StackNavigation";
import MyProvider from '../AnimeList/src/components/Contexts/MyProvider';

// import firebase from "./src/config/firebase";

export default function App() {
  return (
    <MyProvider>
    <NavigationContainer>
        <StackNavigation />
    </NavigationContainer>
    </MyProvider>
  );
}
