import React from "react";

import { FlatList, Text, View, Alert, ActivityIndicator } from "react-native";

import MyContext from "../components/Contexts/MyContext";
import Header from "../components/Header";

import { CardHorizontal } from "../components/Cards/CardHorizontal";
import { ButtonCategory } from "../components/Buttons/ButtonCategory";
import { ModalAdicionar } from "../components/Modals/ModalAdicionar";

export default function ListScreen() {
  const contexto = React.useContext(MyContext);

  const { lista1, setLista1, deleteItem } = contexto;
  const [openBuscar, setBuscar] = React.useState(false);

  const handleDeleteItem = (listName, itemId) => {
    deleteItem(listName, itemId);
    Alert.alert("anime deletado");
  };

  return (
    <View className="z-10 flex-1 items-center bg-black">
      <Header />
      <ModalAdicionar open={openBuscar} />
      <Text className="z-10 text-2xl font-bold text-white mb-5">
        Minha Lista
      </Text>
      <View className="z-10 flex-1 rounded-t-3xl bg-slate-700 p-2 mx-1">
        <View className="flex-row justify-between items-center p-5">
          <ButtonCategory
            text={"Pretendo Assistir"}
            className="border-amber-500 shadow-amber-500 active:bg-amber-500"
          />
          <ButtonCategory
            text={"Adicionar"}
            press={() => setBuscar(!openBuscar)}
            className="border-black bg-amber-500 active:border-white active:bg-black"
          />
        </View>

        <View className="-z-0 flex-1 items-center scale-95 gap-1">
          <FlatList
            data={lista1}
            ListEmptyComponent={<CardHorizontal />}
            renderItem={(anime) => {
              return (
                <CardHorizontal
                  title={anime.item?.title.romaji}
                  image={anime.item?.coverImage.large}
                  genres={anime.item?.genres}
                  id={anime.index}
                  longPress={() => handleDeleteItem("lista1", anime.item.id)}
                  episodes={anime.item?.episodes}
                  status={anime.item?.status}
                />
              );
            }}
            className="w-full"
          />
        </View>
      </View>
    </View>
  );
}
