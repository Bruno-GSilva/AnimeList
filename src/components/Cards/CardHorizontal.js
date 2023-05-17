import React, { useState } from "react";
import { Image, Pressable, Text, View } from "react-native";

import { ModalDelete } from "../Modals/ModalDelete";
import { Dropdown } from "../Dropdown";

export function CardHorizontal(props) {
  const [DeleteCard, setDeleteCard] = useState(false);
  const [select, setSelect] = useState();

  return (
    <View className="flex-1 p-2 my-1 flex-row items-center justify-between rounded-xl bg-black border-2 border-amber-500 overflow-hidden" key={props.id}>
      <Pressable
        className="h-full w-1/2 rounded-md overflow-hidden scale-90 border-2 border-white active:border-red-500"
        onLongPress={()=> setDeleteCard(!DeleteCard)}
      >
        <Image
          className="flex-1"
          resizeMode="cover"
          source={{
            uri: props.image
              ? props.image
              : "https://pt.apkshki.com/storage/12708/icon_63d4e34c0e569_12708_w256.png",
          }}
        />
        <ModalDelete open={DeleteCard} />
      </Pressable>
      <View className="h-full w-1/2 rounded-2xl p-2">
        <View className="flex-1 flex-row items-center justify-between">
          <Dropdown
            options={
              props.season ? props.season : ["Season 1", "Season 2", "Season 3"]
            }
            value={select}
            onChange={setSelect}
          />
        </View>
        <View className="flex-1 pt-2 justify-center gap-1">
          <View className="w-40">
            <Text
              className="text-sm text-white font-bold mr-2"
              numberOfLines={1}
            >
              {props.title ? props.title : "Nome do Anime"}
            </Text>
          </View>

          <Text className="w-32 text-sm text-white" numberOfLines={1}>
            Status:{" "}
            {props.status ? (
              props.status === "FINISHED" ? (
                <Text className="text-red-500">{props.status}</Text>
              ) : props.status === "RELEASING" ? (
                <Text className="text-amber-500">{props.status}</Text>
              ) : (
                <Text className="text-green-500">{props.status}</Text>
              )
            ) : (
              <Text className="text-slate-500">Null</Text>
            )}
          </Text>

          <Text className="text-sm text-white" numberOfLines={2}>
            Generos:{" "}
            <Text className="text-slate-500">
              {props.status ? `${props.genres[0]}/${props.genres[1]}` : "Null"}
            </Text>
          </Text>
          <Text className="text-sm text-white" numberOfLines={1}>
            Lançamento: <Text className="text-slate-500">{"Terça-Feira"}</Text>
          </Text>
          <Text className="text-sm text-white" numberOfLines={1}>
            Episodios:{" "}
            <Text className="text-slate-500">
              {props.episodes ? props.episodes : "Null"}
            </Text>
          </Text>
        </View>
      </View>
    </View>
  );
}
