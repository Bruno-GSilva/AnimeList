import React from "react";
import { Image, Pressable, Text, View } from "react-native";

export function CardSmall(props) {
  return (
    <View
      className="w-48 h-80 mx-1 flex-row items-center justify-between rounded-3xl bg-slate-700 border-2 border-black overflow-hidden "
      key={props.id}>
      <Image
        className="h-full w-1/2 rounded-2xl overflow-hidden"
        source={{ uri: props.url }}></Image>
    </View>
  );
}
