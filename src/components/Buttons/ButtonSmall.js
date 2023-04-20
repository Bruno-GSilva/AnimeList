import React from "react";
import { Pressable, Text} from "react-native";

export function ButtonSmall({template, text}) {
  if(template === "blue"){
  return (
    <Pressable className="w-32 h-10 border-2 border-sky-500 justify-center items-center rounded-xl active:bg-sky-500">
      <Text className="text-base font-semibold text-white ">{text}</Text>
    </Pressable>
  );}
  if(!template){
  return (
    <Pressable className="w-32 h-10 border-2 border-amber-500 justify-center items-center rounded-xl active:bg-amber-500">
      <Text className="text-base font-semibold text-white ">{text}</Text>
    </Pressable>
  );}
}
