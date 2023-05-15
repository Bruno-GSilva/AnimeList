import React, { useContext, useEffect } from "react";
import { Pressable } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import MyContext from "../Contexts/MyContext";

export function ModalDelete({ open }) {

  const { lista1, setLista1 } = useContext(MyContext);

  useEffect(()=>{
    lista1.map(item => console.log(item))
  },[])

  const excluirItem = (itemId) => {
    const novaLista = lista1.filter((item) => item.id !== itemId);
    setLista1(novaLista);
  };

  if (open) {
    return (
      <Pressable
        className="absolute bottom-0 h-1/2 w-full justify-center items-center text-center bg-red-900 active:bg-amber-500" onLongPress={excluirItem(id)}>
        <Icon name="trash" size={32}/>
      </Pressable>
    );
  }
}
