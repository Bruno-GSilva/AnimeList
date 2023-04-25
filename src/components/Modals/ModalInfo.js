import React from "react";
import { Text, View} from "react-native";
import { ButtonCategory } from "../Buttons/ButtonCategory";
import { useNavigation } from "@react-navigation/native";

export function ModalInfo({ open}) {

  const { navigate } = useNavigation();

  if (open) {
    return (
      <View className='z-20 absolute w-1/2 h-80 top-14 left-1 rounded-2xl border-2 border-amber-600 bg-slate-500 items-center justify-center'>
        <Text className='mt-6 text-base font-semibold text-black'>Minhas Lista</Text>
        <ButtonCategory template={'red'} />
        <ButtonCategory template={'purple'}/>
        <ButtonCategory template={'green'}/>
        <ButtonCategory template={'blue'} navegate={ ()=> navigate('List')}/>
      </View>
    );
  }
}
