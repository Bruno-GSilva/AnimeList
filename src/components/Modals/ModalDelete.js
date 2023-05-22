import React, { useContext } from "react";
import { Pressable } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import MyContext from "../Contexts/MyContext";

export function ModalDelete({ open, pressIn }) {

  if (open) {
    return (
      <Pressable
        className="absolute bottom-0 h-1/2 w-full justify-center items-center text-center bg-red-900 active:bg-amber-500"
      onPress={pressIn}
      >
        <Icon name="trash" size={32} />
      </Pressable>
    );
  } else {
    return null;
  }
}
