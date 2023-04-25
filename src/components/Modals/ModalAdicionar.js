import React, { useEffect, useState } from "react";
import { FlatList, Image, Pressable, Text, TextInput, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

import { DataAnime } from "../Contexts/DataAnimesContext";

export function ModalAdicionar({ open }) {
  const [search, setSearch] = useState("");

  if (open) {
    return (
      <View className="-z-0 absolute top-[310px] w-[390px] h-[530px] p-10 rounded-3xl bg-slate-600 border-2 border-sky-500 overflow-hidden">
        <View className="z-30 top-[6px] left-2">
          <Icon
            name="search"
            size={23}
            color={"#000"}
            style={{
              position: "absolute",
            }}
          />
        </View>
        <TextInput
          className="w-80 rounded-lg px-9 py-1 text-white border-2 border-black focus:border-amber-500 mb-5"
          value={search}
          onChangeText={(text) => setSearch(text)}
        />

        <FlatList
          data={DataAnime}
          renderItem={(anime) => {
            const animeTitule = anime.item.titule.toLowerCase();
            const searchAnime = search.toLowerCase();

            if (search === "") {
              return (
                <Pressable className="flex-row items-center p-2 mb-2 border-2 border-black overflow-hidden rounded-xl active:border-amber-500">
                  <Image
                    source={{
                      uri:'https://pt.apkshki.com/storage/12708/icon_63d4e34c0e569_12708_w256.png',
                    }}
                    className="w-32 h-32 rounded-xl mr-2"
                  />

                  <View className="w-40">
                    <Text
                      className="ml-2 my-2 text-base text-white font-semibold"
                      numberOfLines={1}>
                        Nome do Anime
                    </Text>
                  </View>
                </Pressable>
              );
            }
            if (animeTitule.includes(searchAnime)) {
              return (
                <Pressable className="flex-row items-center p-2 mb-2 border-2 border-green-500 overflow-hidden rounded-xl active:border-amber-500">
                  <Image
                    source={{
                      uri: anime.item.image,
                    }}
                    className="w-32 h-32 rounded-xl mr-2"
                  />

                  <View className="w-40">
                    <Text
                      className="ml-2 my-2 text-base text-white font-semibold"
                      numberOfLines={1}>
                      {anime.item.titule}
                    </Text>
                  </View>
                </Pressable>
              );
            }
          }}
        />
      </View>
    );
  }
}
