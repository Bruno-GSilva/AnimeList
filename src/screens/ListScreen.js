import React, { useEffect, useState } from "react";
import { Image, ScrollView, Text, View } from "react-native";
import Header from "../components/Header";
import { CardHorizontal } from "../components/Cards/CardHorizontal";
import { ButtonCategory } from "../components/Buttons/ButtonCategory";
import { ModalAdicionar } from "../components/Modals/ModalAdicionar";
import axios from "axios";

export default function ListScreen() {
  const [dataAnime, setDataAnime] = useState([]);
  const [openBuscar, setBuscar] = useState(false);

  const animeCard = async (query) => {
    const response = await axios.post("https://graphql.anilist.co", {
      query: `
        query ($search: String) {
          Page(perPage: 10) {
            media(search: $search, type: ANIME, isAdult:false) {
              id
              title {
                romaji
                english
                native
              }
              description(asHtml: false)
              
              genres
              status
              episodes
              coverImage {
                large
              }
            }
          }
        }
      `,
      variables: {
        search: query,
      },
    });

    setDataAnime(response.data.data.Page.media);
  };

  useEffect(() => {
    animeCard();
  }, []);

  return (
    <View className="-z-10 flex-1 items-center bg-black">
      <Header />
      <ModalAdicionar open={openBuscar} />
      <Text className="-z-10 text-2xl font-bold text-white mb-5">
        Minha Lista
      </Text>
      <View className="-z-10 flex-1 rounded-3xl bg-slate-700 p-2 mx-1">
        <View className="flex-row justify-between items-center p-5">
          <ButtonCategory
            text={"Assistindo"}
            className="border-sky-500 active:bg-sky-500"
          />
          <ButtonCategory
            text={"Adicionar"}
            className="border-black bg-yellow-500 active:border-white"
            press={() => setBuscar(!openBuscar)}
          />
        </View>
        <View className="-z-0 flex-1 items-center">
          <ScrollView>
            {dataAnime?.length ? (
              dataAnime.map((anime) => {
                return (
                  <CardHorizontal
                    titule={anime.title.romaji}
                    url={anime.coverImage.large}
                    status={anime.status}
                    genero={anime.genres}
                    launch={anime.title.native}
                    eps={anime.episodes}
                    key={anime.id}
                  />
                );
              })
            ) : (
                  <CardHorizontal/>
                )
            }
          </ScrollView>
        </View>
      </View>
    </View>
  );
}
