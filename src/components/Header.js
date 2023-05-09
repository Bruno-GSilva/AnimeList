import React, { useState } from "react";
import { Image, Pressable, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Menu } from "./Modals/Menu";

export default function Header() {
  const [options, setOpitions] = useState(false)

  const { navigate } = useNavigation();
  return (
    <View className="z-30 w-full m-4 border-b-2 border-slate-700 p-4 flex-row justify-between items-center bg-black">
      <View className="z-50 flex-row items-center">
        <Pressable className="w-20 h-20 border-2 rounded-full border-amber-500 overflow-hidden mr-5 active:border-white" onPress={()=>setOpitions(!options)}>
          <Image
            source={{
              uri: "https://64.media.tumblr.com/f604cc8f695c04b1ba8d9ceb9e74f87b/tumblr_pph6coG18x1u1ycqw_400.jpg",
            }}
            className="flex-1"
          />
        </Pressable>
        <Text className="text-amber-500 font-bold text-xl">Gaby</Text>
      </View>
      <View className='flex-row gap-2'>
        <Pressable className="w-16 h-16 p-2 border-2 rounded-full bg-white overflow-hidden active:border-amber-500" onPress={() => navigate("Home")}>
          <Image
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/69/69524.png",
            }}
            className="flex-1"
          />
        </Pressable>
        <Pressable className="w-16 h-16 p-2 border-2 rounded-full bg-white overflow-hidden active:border-amber-500" onPress={()=> navigate('Login')}>
          <Image
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/9258/9258147.png",
            }}
            className="flex-1"
          />
        </Pressable>
      </View>
      <Menu open={options}/>
    </View>
  );
}
