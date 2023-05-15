import React, { useEffect, useState } from "react";
import { Image, ScrollView, Text, View } from "react-native";
import Header from "../components/Header";
import { CardHorizontal } from "../components/Cards/CardHorizontal";
import { ButtonCategory } from "../components/Buttons/ButtonCategory";
import { ModalAdicionar } from "../components/Modals/ModalAdicionar";
import axios from "axios";
import { AnimeCard } from "../components/Anilist";

export default function AbandonedScreen() {
  const [dataAnime, setDataAnime] = useState([]);
  const [openBuscar, setBuscar] = useState(false);

  AnimeCard().then((response)=>console.log(response))

  return (
    <View className="z-10 flex-1 items-center bg-black">
      <Header />
      <ModalAdicionar open={openBuscar} />
      <Text className="z-10 text-2xl font-bold text-white mb-5">
        Minha Lista
      </Text>
      <View className="z-10 flex-1 rounded-3xl bg-slate-700 p-2 mx-1">
        <View className="flex-row justify-between items-center p-5">
          <ButtonCategory
            text={"Abandonado"}
            className="border-red-500 active:bg-red-500 shadow-red-500"
          />
          <ButtonCategory
            text={"Adicionar"}
            className="border-black bg-amber-500 active:border-white active:bg-black"
            press={() => setBuscar(!openBuscar)}
          />
        </View>
        <View className="-z-0 flex-1 items-center">
          {/* <ScrollView>
            {dataAnime?.length ? (
              dataAnime.map((anime) => {
                return (
                  <CardHorizontal
                    image={anime.coverImage.large}
                    title={anime.title.romaji}
                    genres={anime.genres}
                    episodes={anime.episodes}
                    status={anime.status}
                    key={anime.id}
                  />
                );
              })
            ) : (
              <Image
                source={{
                  uri: "https://www.gifcen.com/wp-content/uploads/2022/09/naruto-gif-4.gif",
                }}
                resizeMode="contain"
                className="w-96 h-96 my-10"
              />
            )}
          </ScrollView> */}
        </View>
      </View>
    </View>
  );
}
