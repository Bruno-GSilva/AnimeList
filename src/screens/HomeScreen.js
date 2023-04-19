import React from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import { Header } from "../components/Header";
import { Card } from "../components/Card";
import { Button } from "../components/Button";
import { DataAnime } from "../components/Contexts/DataAnimesContext";

export default function HomeScreen() {
  return (
    <View className="flex-1 items-center bg-black">
      <Header />
      <View className="w-full flex-row items-center justify-around">
        <Text className="text-2xl font-bold text-white my-8">Minha Lista</Text>
      </View>
      <View className="bg-slate-500 p-2 rounded-2xl">
        <View className='flex-row w-auto justify-between mx-2 my-4'>
          <Pressable className='w-32 h-10 border-2 border-sky-200 items-center justify-center rounded-2xl'>
            <Text className='text-white text-lg font-semibold'>Assistindo</Text>
          </Pressable>
          <Pressable className='w-32 h-10 border-2 border-amber-500 items-center justify-center rounded-lg active:bg-amber-500'>
            <Text className='text-white text-lg font-semibold'>Adicionar</Text>
          </Pressable>
        </View>
        <ScrollView>
          {DataAnime.map((e) => (
            <Card
              url={e.image}
              titule={e.titule}
              genero={e.genero}
              id={e.id}
              key={e.id}
              eps={e.episode}
              launch={e.launch}
              status={e.status}
            />
          ))}
        </ScrollView>
      </View>
    </View>
  );
}
