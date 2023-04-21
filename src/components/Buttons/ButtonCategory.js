import React from "react";
import { Pressable, Text } from "react-native";

export function ButtonCategory({ template, text, navegate }) {
  if (template === "red") {
    return (
      <Pressable className="w-32 h-10 border-2 border-red-500 justify-center items-center rounded-xl active:bg-red-500 my-2 shadow-2xl shadow-red-500" onPress={navegate}>
        <Text className="text-base font-semibold text-white ">Abandonado</Text>
      </Pressable>
    );
  }
  if (template === "green") {
    return (
      <Pressable className="w-32 h-10 border-2 border-green-500 justify-center items-center rounded-xl active:bg-green-500 my-2 shadow-2xl shadow-green-500" onPress={navegate}>
        <Text className="text-base font-semibold text-white ">Concluido</Text>
      </Pressable>
    );
  }
  if (template === "purple") {
    return (
      <Pressable className="w-32 h-10 border-2 border-purple-500 justify-center items-center rounded-xl active:bg-purple-500 my-2 shadow-2xl shadow-purple-500" onPress={navegate}>
        <Text className="text-base font-semibold text-white" numberOfLines={1}>Planeja Assistir</Text>
      </Pressable>
    );
  }
  if (template === "blue") {
    return (
      <Pressable className="w-32 h-10 border-2 border-sky-500 justify-center items-center rounded-xl active:bg-sky-500 my-2 shadow-2xl shadow-sky-500" onPress={navegate}>
        <Text className="text-base font-semibold text-white ">Assistindo</Text>
      </Pressable>
    );
  }
  if (!template) {
    return (
      <Pressable className="w-32 h-10 border-2 border-black bg-amber-500  justify-center items-center rounded-xl active:border-yellow-500 active:bg-black">
        <Text className="text-base font-semibold text-white ">{text}</Text>
      </Pressable>
    );
  }
}
