import React, { useState } from 'react';
import MyContext from './MyContext';

const MyProvider = ({ children }) => {
    const [lista1, setLista1] = useState([]);
    const [lista2, setLista2] = useState([]);
    const [lista3, setLista3] = useState([]);
    const [lista4, setLista4] = useState([]);
  
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
        }}
      >
        {children}
      </MyContext.Provider>
    );
  };
  
  export default MyProvider;
  