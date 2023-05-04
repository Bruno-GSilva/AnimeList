import React from "react";
import { Text, View } from "react-native";
import { ButtonCategory } from "../Buttons/ButtonCategory";
import { useNavigation } from "@react-navigation/native";

export function Menu({ open }) {
  const { navigate } = useNavigation();

  if (open) {
    return (
      <View className="z-20 absolute w-1/2 h-80 top-14 left-1 rounded-2xl border-2 border-amber-600 bg-slate-500 items-center justify-center">
        <Text className="mt-6 text-base font-semibold text-black">
          Minhas Lista
        </Text>
        <ButtonCategory text={'Assistindo'} className="border-sky-500 shadow-sky-500 active:bg-sky-500" press={()=> navigate('Watching')}/>
        <ButtonCategory text={'Concluido'} className="border-green-500 shadow-green-500 active:bg-green-500" press={()=> navigate('Complete')}/>
        <ButtonCategory text={'Abandonado'} className="border-red-500 shadow-red-500 active:bg-red-500" press={()=> navigate('Abandoned')}/>
        <ButtonCategory text={'Pretendo Assistir'} className="border-amber-500 shadow-amber-500 active:bg-amber-500" press={()=> navigate('List')}/>
      </View>
    );
  }
}
