import React, { useEffect, useState } from "react";
import { Alert, ScrollView, Text, View } from "react-native";
import axios from "axios";

import Header from "../components/Header";
import { CardHorizontal } from "../components/Cards/CardHorizontal";
import { ButtonCategory } from "../components/Buttons/ButtonCategory";
import { ModalAdicionar } from "../components/Modals/ModalAdicionar";

export default function ListScreen({ route }) {
  
  const anime = { title, genres, episodes } =
    route.params;

  const [openBuscar, setOpenBuscar] = useState(false);
  const [DataAnime, setDataAnime] = useState([]);

  useEffect(() => {
    adicionarItens()
    console.log("Lista atualizada:", DataAnime);
  }, [anime]);

  const adicionarItens = () => {
    const novosItens = [anime];
    const novaLista = DataAnime.concat(novosItens);
    setDataAnime(novaLista);
  };

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
            className="border-black bg-amber-500 active:border-white active:bg-black"
            press={() => setOpenBuscar(!openBuscar)}
          />
        </View>
        <View className="-z-0 flex-1 items-center">
          <ScrollView>
          </ScrollView>
        </View>
      </View>
    </View>
  );
}
