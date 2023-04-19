import React, { useContext, useState, useEffect } from "react";
import { Image, Pressable, Text, View } from "react-native";

import { ModalDelete } from "./ModalDelete";

export function Card(props) {
  const [Info, setModalInfo] = useState(false);
  const [Delete, setModalDelete] = useState(false);

  return (
    <View className="w-auto h-auto flex-row px-0 py-0 my-2 mx-2 items-center border-2 rounded-xl bg-black shadow-2xl shadow-white border-yellow-500 overflow-hidden">
      <Pressable
        className="h-full w-1/2 mr-6 border-2 rounded-md border-white overflow-hidden active:border-yellow-500"
        onPress={() => setModalInfo(!Info)}
        onLongPress={() => setModalDelete(!Delete)}
      >
        <Image
          source={{
            uri: `${
              !props.url
                ? "https://avatars.githubusercontent.com/u/40152459?v=4"
                : props.url
            }`,
          }}
          className="flex-1"
        />
        <ModalDelete open={Delete} />
      </Pressable>
      {/* description anime */}
      <View className="items-start gap-3">
        <View className='w-52 flex-row justify-between items-center mx-4'>
          <Text className="text-md text-white text-center font-bold">
            {props.titule}
          </Text>
          <Pressable className="border-2 border-white p-2 rounded-3xl ">
            <Text className="text-md text-white text-center font-semibold">
              Temporada
            </Text>
          </Pressable>
        </View>
        <Text className="text-md text-white text-center font-semibold">
          Status:{" "}
          {props.status === "Complete" ? (
            <Text className="text-green-500">{props.status}</Text>
          ) : (
            <Text className="text-yellow-500">{props.status}</Text>
          )}
        </Text>
        <Text className="text-md text-white text-center font-semibold">
          Genero: {props.genero}
        </Text>
        <Text className="text-md text-white text-center font-semibold">
          Lançamento: {props.launch}
        </Text>
        <Text className="text-md text-white text-center font-semibold">
          Episodios: {props.eps}
        </Text>
      </View>
    </View>
  );
}
