import React from "react";
import { Image, Pressable, Text, View } from "react-native";

export function CardVertical({ anime}) {

  const { title, genres, episodes, coverImage } = anime

  return (
    <View className="w-48 h-80 mx-1  flex-col items-center  rounded-3xl bg-black border-2 border-amber-500">
      <Pressable className="h-40 w-40 rounded-2xl my-4 border-2 border-sky-500 overflow-hidden">
        <Image
          className='flex-1'
          source={{ uri: coverImage.large}} alt={title.romaji}></Image>
      </Pressable>
      <View className="w-40 h-10">
        <Text className="text-base font-semibold text-white" numberOfLines={1}>
          {title.romaji}
        </Text>
        <Text className="text-base font-semibold text-white" numberOfLines={1}>
          {genres}
        </Text>
        <Text className="text-base font-semibold text-white" numberOfLines={1}>
          {episodes}
        </Text>
      </View>
    </View>
  );
}
