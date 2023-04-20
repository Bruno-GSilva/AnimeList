import React from "react";
import { ScrollView, Text, View } from "react-native";
import { Header } from "../components/Header";
import { Card } from "../components/Card";
import { DataAnime } from "../components/Contexts/DataAnimesContext";
import { ButtonSmall } from "../components/Buttons/ButtonSmall";

export default function ListScreen() {
  return (
    <View className="flex-1 items-center bg-black">
      <Header />
      <Text className="text-2xl font-bold text-white mb-5">Minha Lista</Text>
      <View className="flex-1 rounded-3xl bg-slate-500 ">
        <View className="flex-row justify-between p-5">
          <ButtonSmall template={"blue"} text={"Assistindo"} />
          <ButtonSmall text={"Adicionar"} />
        </View>
        <View className="flex-1 p-2">
          <ScrollView>
            {DataAnime.map((anime) => {
              return (
                <Card
                  titule={anime.titule}
                  url={anime.image}
                  status={anime.status}
                  genero={anime.genero}
                  launch={anime.launch}
                  eps={anime.episode}
                  id={anime.id}
                />
              );
            })}
          </ScrollView>
        </View>
      </View>
    </View>
  );
}
