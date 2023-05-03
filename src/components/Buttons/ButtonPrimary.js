import React from "react";
import { Text, Pressable } from "react-native";

export function ButtonPrimary(props) {
  return (
    <Pressable
      className="border-2 h-10 justify-center items-center rounded-lg bg-yellow-500 my-4 active:border-white"
      onPress={props.route}
      >
      <Text className="text-white m-2">{props.text}</Text>
    </Pressable>
  );
}
