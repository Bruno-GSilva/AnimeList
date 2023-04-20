import React from "react";
import { Image, Pressable, Text, View } from "react-native";

export function Card(props) {
  return (
    <View className="flex-1 my-1 flex-row items-center justify-between rounded-3xl bg-slate-700 border-2 border-black overflow-hidden " key={props.id}>
      {/* Imagem do Card */}

      <Image
        className="h-full w-1/2 rounded-2xl overflow-hidden"
        source={{ uri: props.url }}></Image>

      {/* Informações do Card */}

      <View className="h-full w-1/2 rounded-2xl p-2">
        <View className="flex-1 flex-row items-center justify-between">
          <View className="w-16">
            <Text
              className="text-sm text-white font-semibold mr-2"
              numberOfLines={1}>
              {props.titule}
            </Text>
          </View>
          <Pressable className="w-26 h-7 justify-center  px-2 border-2 border-white rounded-xl active:bg-slate-500">
            <Text className='text-xs text-white font-semibold'>Temporada 1 "x"</Text>
          </Pressable>
        </View>
        <View className="flex-1 pt-4 justify-center gap-4">
          <Text className="text-sm text-white" numberOfLines={1}>
            Status:{" "}
            {props.status === "Complete" ? (
              <Text className="text-green-500">{props.status}</Text>
            ) : (
              <Text className="text-yellow-500">{props.status}</Text>
            )}
          </Text>
          <Text className="text-sm text-white" numberOfLines={1}>
            Genero: <Text>{props.genero}</Text>
          </Text>
          <Text className="text-sm text-white" numberOfLines={1}>
            Lançamento: <Text>{props.launch}</Text>
          </Text>
          <Text className="text-sm text-white" numberOfLines={1}>
            Episodios: <Text>{props.eps}</Text>
          </Text>
        </View>
      </View>
    </View>
  );
}
