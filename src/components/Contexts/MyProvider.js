import React, { useState } from "react";
import MyContext from "./MyContext";

const MyProvider = ({ children }) => {
  const [lista1, setLista1] = useState([]);
  const [lista2, setLista2] = useState([]);
  const [lista3, setLista3] = useState([]);
  const [lista4, setLista4] = useState([]);

  const deleteItem = (listName, itemId) => {
    switch (listName) {
      case "lista1":
        setLista1(lista1.filter((item) => item.id !== itemId));
        break;
      case "lista2":
        setLista2(lista2.filter((item) => item.id !== itemId));
        break;
      case "lista3":
        setLista3(lista3.filter((item) => item.id !== itemId));
        break;
      case "lista4":
        setLista4(lista4.filter((item) => item.id !== itemId));
        break;
      default:
        break;
    }
  };

  return (
    <MyContext.Provider
      value={{
        lista1,
        lista2,
        lista3,
        lista4,
        setLista1,
        setLista2,
        setLista3,
        setLista4,
        deleteItem,
      }}>
      {children}
    </MyContext.Provider>
  );
};

export default MyProvider;
