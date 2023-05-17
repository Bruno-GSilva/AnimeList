import React, { useContext, useEffect, useState } from "react";
import { FlatList, ScrollView, Text, View } from "react-native";
import Header from "../components/Header";
import { CardHorizontal } from "../components/Cards/CardHorizontal";
import { ButtonCategory } from "../components/Buttons/ButtonCategory";
import MyContext from "../components/Contexts/MyContext";
import { ModalAdicionar } from "../components/Modals/ModalAdicionar";

export default function ListScreen({ route }) {

  const contexto = useContext(MyContext);
  const { lista1, setLista1 } = contexto;

  const [openBuscar, setBuscar] = useState(false);

  const getAnime = (item) => {
    setLista1([...lista1, item]);
  };

  // const deleteAnime = (itemId) => {
  //   const novaLista = lista1.filter((item) => item.id !== itemId);
  //   setLista1(novaLista);
  // };

  useEffect(() => {
    getAnime(route.params);
  }, [route.params]);

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
            text={"Pretendo Assistir"}
            className="border-amber-500 shadow-amber-500 active:bg-amber-500"
          />
          <ButtonCategory
            text={"Adicionar"}
            press={() => setBuscar(!openBuscar)}
            className="border-black bg-amber-500 active:border-white active:bg-black"
          />
        </View>
        <View className="-z-0 flex-1 items-center">
          <FlatList
            data={lista1}
            renderItem={(anime) => {
              return (
                <CardHorizontal
                  title={anime?.item?.title?.romaji}
                  image={anime?.item?.coverImage?.large}
                  genres={anime?.item?.genres}
                  id={anime?.index}
                  episodes={anime?.item?.episodes}
                  status={anime?.item?.status}
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
