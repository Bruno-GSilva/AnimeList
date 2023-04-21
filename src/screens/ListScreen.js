import React from "react";
import { ScrollView, Text, View } from "react-native";
import Header from "../components/Header";
import { CardHorizontal } from "../components/Cards/CardHorizontal";
import { DataAnime } from "../components/Contexts/DataAnimesContext";
import { ButtonCategory } from "../components/Buttons/ButtonCategory";

export default function ListScreen() {
  return (
    <View className="-z-10 flex-1 items-center bg-black">
      <Header />
      <Text className="-z-10 text-2xl font-bold text-white mb-5">
        Minha Lista
      </Text>
      <View className="-z-10 flex-1 rounded-3xl bg-slate-700 p-2 mx-1">
        <View className="flex-row justify-between items-center p-5">
          <ButtonCategory template={"blue"} />
          <ButtonCategory text={"Adicionar"} />
        </View>
        <View className="-z-0 flex-1 items-center">
          <ScrollView>
            {DataAnime.map((anime) => {
              return (
                <CardHorizontal
                titule={anime.titule}
                url={anime.image}
                status={anime.status}
                genero={anime.genero}
                launch={anime.launch}
                eps={anime.episode}
                key={anime.id}
                />
              );
            })}
          </ScrollView>
        </View>
      </View>
    </View>
  );
}
