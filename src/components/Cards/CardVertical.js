import React from "react";
import { FlatList, Image, Pressable, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

export function CardVertical({ anime }) {
  const { navigate } = useNavigation();

  const { title, genres, episodes, coverImage, status, description } = anime;

  return (
    <Pressable
      className="shadow-md shadow-black w-44 h-80 ml-2 flex-col items-center  rounded-md bg-black border-2 border-amber-500 active:border-white scale-y-90"
      onPress={() =>
        navigate("Pagination", {
          title,
          genres,
          episodes,
          coverImage,
          status,
          description,
        })
      }>
      <View className="h-40 w-40 rounded-md my-4 border-2 border-sky-500 overflow-hidden scale-90">
        <Image
          className="flex-1"
          source={{
            uri: coverImage.large
              ? coverImage.large
              : "https://pt.apkshki.com/storage/12708/icon_63d4e34c0e569_12708_w256.png",
          }}
        />
      </View>
      <View className="w-40 h-10">
        <Text className="text-base font-semibold text-white" numberOfLines={1}>
          {title.native ? title.native : "Titulo"}
        </Text>
        <Text className="text-base font-semibold text-white" numberOfLines={1}>
          {' '+ genres + ", "}
        </Text>
        <Text className="text-base font-semibold text-white" numberOfLines={1}>
          Eps: {episodes ? episodes : "Em Andamento"}
        </Text>
      </View>
    </Pressable>
  );
}
