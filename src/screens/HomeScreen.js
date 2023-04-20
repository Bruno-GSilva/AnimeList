import React from "react";
import { ScrollView, Text, View } from "react-native";
import { Header } from "../components/Header";
import { CardSmall } from "../components/Cards/CardSmall";

export default function HomeScreen({ navigation }) {
  return (
    <View className="flex-1 items-center bg-black">
      <Header />
      <View className="flex-1 rounded-3xl bg-slate-500 ">
        <ScrollView>
          <Text className="px-7 py-2 text-2xl font-bold text-white">Lançamentos</Text>
          <View className="flex-row scale-90">
            <ScrollView horizontal>
              <CardSmall />
              <CardSmall />
              <CardSmall />
            </ScrollView>
          </View>
          <Text className="px-7 py-2 text-2xl font-bold text-white">Populares</Text>
          <View className="flex-row scale-90">
            <ScrollView horizontal>
              <CardSmall />
              <CardSmall />
              <CardSmall />
            </ScrollView>
          </View>
          <Text className="px-7 py-2 text-2xl font-bold text-white">Temporada Anterior</Text>
          <View className="flex-row scale-90">
            <ScrollView horizontal>
              <CardSmall />
              <CardSmall />
              <CardSmall />
            </ScrollView>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}
