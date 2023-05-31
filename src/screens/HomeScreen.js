import React from "react";
import { useState, useEffect } from "react";
import { Text, Image, ScrollView, View, Pressable } from "react-native";
import axios from "axios";

import Header from "../components/Header";
import { Category } from "../components/Category";
import { ButtonCategory } from "../components/Buttons/ButtonCategory";

export default function HomeScreen() {
  const [animeListPage1, setAnimeListPage1] = useState([]);
  const [animeListPage2, setAnimeListPage2] = useState([]);
  const [animeListPage3, setAnimeListPage3] = useState([]);
  const [animeListPage4, setAnimeListPage4] = useState([]);

  const fetchAnimeList = async (page, setState) => {
    const currentDate = new Date();
    const startOfMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      1
    );
    const endOfMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + 1,
      1
    );

    const response = await axios.post("https://graphql.anilist.co/", {
      query: `
        query ($page: Int, $perPage: Int) {
          Page (page: $page, perPage: $perPage) {
            media (type: ANIME) {
              id
              title {
                romaji
                english
                native
              }
              description
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
        startDate: {
          year: startOfMonth.getFullYear(),
          month: startOfMonth.getMonth() + 1,
          day: startOfMonth.getDate(),
        },
        endDate: {
          year: endOfMonth.getFullYear(),
          month: endOfMonth.getMonth() + 1,
          day: endOfMonth.getDate(),
        },
        page: page,
        perPage: 5,
      },
    });
    setState(response.data.data.Page.media);
  };

  useEffect(() => {
    fetchAnimeList(1, setAnimeListPage1);
    fetchAnimeList(2, setAnimeListPage2);
    fetchAnimeList(3, setAnimeListPage3);
    fetchAnimeList(4, setAnimeListPage4);
  }, []);

  return (
    <View className="flex-1 items-center bg-black">
      <Header />
      <View className="z-10 flex-1 rounded-t-3xl bg-slate-700 py-2 mx-1">
        <ScrollView>
          <Pressable className="h-[480px] justify-between items-center mx-6 my-2 rounded-2xl shadow-lg shadow-black bg-black border active:border-white overflow-hidden">
            <Text
              className="w-full text-3xl mt-10 px-6 font-extrabold text-white opacity-0"
              numberOfLines={1}>
              Nome do Anime
            </Text>
            <Image
              source={{
                uri: "https://e1.pxfuel.com/desktop-wallpaper/51/649/desktop-wallpaper-mashle-magic-and-muscles-vol-1-komoto-hajime-9781974719297-books-mashle-magic-and-muscles.jpg",
              }}
              resizeMode="cover"
              className="-z-10 top-0 left-0 h-full w-full absolute"
            />
            <View className="flex-row gap-8">
              <ButtonCategory
                text={"+ Minha Lista"}
                className="z-30   border-amber-500 active:border-white bg-black"
              />
              <ButtonCategory
                text={"Saiba Mais"}
                className=" z-30  active:border-amber-500 bg-black"
              />
            </View>
          </Pressable>

          <Category arr={animeListPage3} text={"Lançamentos"} />
          <Category arr={animeListPage2} text={"Animes da Temporada"} />
          <Category arr={animeListPage1} text={"Temporada Passada"} />
          <Category arr={animeListPage4} text={"Favoritos"} />
        </ScrollView>
      </View>
    </View>
  );
}
