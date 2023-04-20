import React from "react";
import { Image, Pressable, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

export function Header({ navigation }) {
  const { goBack } = useNavigation();
  return (
    <View className="w-full m-4 border-b-2 border-slate-700 p-4 flex-row justify-between items-center bg-black">
      <View className="flex-row items-center">
        <Pressable className="w-20 h-20 border-2 rounded-full border-amber-500 overflow-hidden bg-white mr-5 active:border-white">
          <Image
            source={{
              uri: "https://www.pngplay.com/wp-content/uploads/12/Anime-Girl-Sad-Background-PNG-Image.png",
            }}
            className="flex-1"
          />
        </Pressable>
        <Text className="text-amber-500 font-bold text-xl">Gaby</Text>
      </View>
      <View className='flex-row gap-2'>
        <Pressable className="w-16 h-16 p-2 border-2 rounded-full bg-white overflow-hidden active:border-amber-500" onPress={() => navigation.navigate("Home")}>
          <Image
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/69/69524.png",
            }}
            className="flex-1"
          />
        </Pressable>
        <Pressable className="w-16 h-16 p-2 border-2 rounded-full bg-white overflow-hidden active:border-amber-500" onPress={goBack}>
          <Image
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/9258/9258147.png",
            }}
            className="flex-1"
          />
        </Pressable>
      </View>
    </View>
  );
}
