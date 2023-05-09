import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigation from "./routes/StackNavigation";
import firebase from "./src/config/firebase";

export default function App() {
  return (
    <NavigationContainer>
        <StackNavigation />
    </NavigationContainer>
  );
}
