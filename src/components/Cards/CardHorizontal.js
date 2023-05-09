import React, { useState } from "react";
import { Image, Pressable, Text, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

import { ModalDelete } from "../Modals/ModalDelete";

export function CardHorizontal(props) {

  const [DeleteCard, setDeleteCard] = useState(false);

  return (
    <View className="flex-1 my-1 flex-row items-center justify-between rounded-md bg-black border-2 border-amber-500 overflow-hidden">
      <Pressable
        className="h-full w-1/2 rounded-md overflow-hidden scale-90 border-2 border-sky-500 active:border-red-500"
        onLongPress={() => setDeleteCard(!DeleteCard)}>
        <Image
          className="flex-1"
          source={{
            uri: props.image
              ? props.image
              : "https://pt.apkshki.com/storage/12708/icon_63d4e34c0e569_12708_w256.png",
          }}/>
        <ModalDelete open={DeleteCard} />
      </Pressable>
      <View className="h-full w-1/2 rounded-2xl p-2">
        <View className="flex-1 flex-row items-center justify-between">
          <Pressable className="flex-1 justify-center flex-row px-2 py-1 border-2 border-amber-500 rounded-xl active:border-white overflow-hidden">
            <Text className="text-xs text-white font-semibold">
              Temporada 1 <Icon name="sort-down" size={25} color="#fff" />
            </Text>
          </Pressable>
        </View>
        <View className="flex-1 pt-2 justify-center gap-1">
          <View className="w-40">
            <Text
              className="text-sm text-white font-bold mr-2"
              numberOfLines={1}>
              {props.title?props.title:'Nome do Anime'}
            </Text>
          </View>

          <Text className="text-sm text-white" numberOfLines={1}>
            status:{" "}
            {props.status === "FINISHED" ? (
              <Text className="text-green-500">Completo</Text>
            ) : (
              <Text className="text-yellow-500">Em Andamento</Text>
            )}
          </Text>
          <Text className="text-sm text-white" numberOfLines={1}>
            genero: <Text>{props.genres?props.genres:'???'}</Text>
          </Text>
          <Text className="text-sm text-white" numberOfLines={1}>
            Lançamento: <Text>{"null"}</Text>
          </Text>
          <Text className="text-sm text-white" numberOfLines={1}>
            Episodios: <Text>{props.episodes}</Text>
          </Text>
        </View>
      </View>
    </View>
  );
}
