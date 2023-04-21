import React from "react";
import { ScrollView, Text, View } from "react-native";
import Header from "../components/Header";
import { CardVertical } from "../components/Cards/CardVertical";
import { DataAnime } from "../components/Contexts/DataAnimesContext";

export default function HomeScreen() {
  return (
    <View className="flex-1 items-center bg-black">
      <Header />
      <View className="-z-10 flex-1 rounded-3xl bg-slate-700 py-2 mx-1">
        <ScrollView>
          <Text className="px-7 text-2xl font-bold text-white">
            Lançamentos
          </Text>
          <View className="flex-row scale-90">
            <ScrollView horizontal>
              {DataAnime.map((anime) => {
                return (
                  <CardVertical
                    id={anime.id}
                    key={anime.id}
                    url={anime.image}
                    genero={anime.genero}
                    launch={anime.launch}
                    titule={anime.titule}
                  />
                );
              })}
            </ScrollView>
          </View>
          <Text className="px-7 text-2xl font-bold text-white">Populares</Text>
          <View className="flex-row scale-90">
            <ScrollView horizontal>
              {DataAnime.map((anime) => {
                return (
                  <CardVertical
                  id={anime.id}
                  key={anime.id}
                  url={anime.image}
                  genero={anime.genero}
                  launch={anime.launch}
                  titule={anime.titule}
                  />
                );
              })}
            </ScrollView>
          </View>
          <Text className="px-7 text-2xl font-bold text-white">
            Temporada Anterior
          </Text>
          <View className="flex-row scale-90">
            <ScrollView horizontal>
              {DataAnime.map(anime => {
                return (
                  <CardVertical
                  key={anime.id}
                  url={anime.image}
                  genero={anime.genero}
                  launch={anime.launch}
                  titule={anime.titule}
                  />
                );
              })}
            </ScrollView>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}
