import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigation from "./routes/StackNavigation";
// import { GlobalContext } from "./src/components/Contexts/GlobalContext";
// import { DataUser } from "./src/components/Contexts/DataUserContext";

export default function App() {

  return (
    // <GlobalContext.Provider value={{ DataUser}}>
      <NavigationContainer>
        <StackNavigation/>
      </NavigationContainer>
    // </GlobalContext.Provider>
  );
}
