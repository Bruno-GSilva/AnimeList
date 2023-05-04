import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigation from "./routes/StackNavigation";
import { GlobalContext } from "./src/components/Contexts/GlobalContext";
import {ListaContext}  from "./src/components/Contexts/ListaContext";

export default function App() {
  return (
    <GlobalContext.Provider value={ListaContext}>
      <NavigationContainer>
        <StackNavigation />
      </NavigationContainer>
    </GlobalContext.Provider>
  );
}
