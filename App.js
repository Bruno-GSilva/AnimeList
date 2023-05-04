import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigation from "./routes/StackNavigation";
import { GlobalContext } from "./src/components/Contexts/GlobalContext";
import { ListaContext } from "./src/components/Contexts/ListaContext";
import { PageContext } from "./src/components/Contexts/PageContext";
import firebase from "./src/config/firebase";

export default function App() {
  return (
    <NavigationContainer>
      <GlobalContext.Provider value={{ListaContext, PageContext}}>
        <StackNavigation />
      </GlobalContext.Provider>
    </NavigationContainer>
  );
}
