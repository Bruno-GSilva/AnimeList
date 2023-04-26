import React, { useState } from "react";
import { Image, Pressable, Text, View, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { ModalDelete } from "../Modals/ModalDelete";
import { Picker } from '@react-native-picker/picker';

export function CardHorizontal(props) {

  const [selectedLanguage, setSelectedLanguage] = useState();
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 45,
      alignItems: "center"
    }
  });

  const [DeleteCard, setDeleteCard] = useState(false);

  return (
    <View className="flex-1 my-1 flex-row items-center justify-between rounded-3xl bg-black border-2 border-amber-500 overflow-hidden">
      {/* Imagem do Card */}
      <Pressable
        className="h-full w-1/2 rounded-2xl overflow-hidden scale-90 border-2 border-sky-500 active:border-red-500"
        onLongPress={() => setDeleteCard(!DeleteCard)}>
        <Image className="flex-1" source={{ uri: props.url }}></Image>
        <ModalDelete open={DeleteCard} />
      </Pressable>
      {/* Informações do Card */}
      <View className="h-full w-1/2 rounded-2xl p-2">
        <View className="flex-1 flex-row items-center justify-between">
          <Pressable className="flex-1 justify-center flex-row px-2 py-1 border-2 border-amber-500 rounded-xl active:border-white overflow-hidden">

            <View className='flex-1'>
            <Picker
              mode="dropdown"
              selectedValue={selectedLanguage}
              style={{ backgroundColor: 'red', color: 'black', flex:1, alignItems: 'center' }}
              onValueChange={(itemValue, itemIndex) => setSelectedLanguage(itemValue)}
            >
              <Picker.Item label="Java" value="java" />
              <Picker.Item label="JavaScript" value="js" />
            </Picker>
            </View>

          </Pressable>
        </View>
        <View className="flex-1 pt-4 justify-center gap-1">
          <View className="w-40">
            <Text
              className="text-sm text-white font-bold mr-2"
              numberOfLines={1}>
              {props.titule}
            </Text>
          </View>

          <Text className="text-sm text-white" numberOfLines={1}>
            Status:{" "}
            {props.status === "Complete" ? (
              <Text className="text-green-500">{props.status}</Text>
            ) : (
              <Text className="text-yellow-500">{props.status}</Text>
            )}
          </Text>
          <Text className="text-sm text-white" numberOfLines={1}>
            Genero: <Text>{props.genero}</Text>
          </Text>
          <Text className="text-sm text-white" numberOfLines={1}>
            Lançamento: <Text>{props.launch}</Text>
          </Text>
          <Text className="text-sm text-white" numberOfLines={1}>
            Episodios: <Text>{props.eps}</Text>
          </Text>
        </View>
      </View>
    </View>
  );
}
