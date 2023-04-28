import React from "react";
import { ScrollView, Text, View } from "react-native";
import Header from "../components/Header";
import { CardVertical } from "../components/Cards/CardVertical";
import { useState, useEffect } from "react";
import axios from "axios";

export default function HomeScreen() {

  const [animeListPage1, setAnimeListPage1] = useState([]);
  const [animeListPage2, setAnimeListPage2] = useState([]);
  const [animeListPage3, setAnimeListPage3] = useState([]);

  const fetchAnimeList = async (page, setState) => {
    const response = await axios.post('https://graphql.anilist.co/', {
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
              episodes
              coverImage {
                large
              }
            }
          }
        }
      `,
      variables: {
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
  }, []);


  return (
    <View className="flex-1 items-center bg-black">
      <Header />
      <View className="-z-10 flex-1 rounded-3xl bg-slate-700 py-2 mx-1">
        <ScrollView>
          <Text className="px-7 text-2xl font-bold text-white">
            Lançamentos
          </Text>
          <View className="flex-row scale-90">
            <ScrollView horizontal>
              {animeListPage2.map((anime) => (
                <CardVertical key={anime.id} anime={anime} />
              ))}
            </ScrollView>
          </View>
          <Text className="px-7 text-2xl font-bold text-white">
            Animes da Temporada
          </Text>
          <View className="flex-row scale-90">
            <ScrollView horizontal>
              {animeListPage1.map((anime) => (
                <CardVertical key={anime.id} anime={anime}/>
              ))}
            </ScrollView>
          </View>
          <Text className="px-7 text-2xl font-bold text-white">
            Populares
          </Text>
          <View className="flex-row scale-90">
            <ScrollView horizontal>
              {animeListPage3.map((anime) => (
                <CardVertical key={anime.id} anime={anime} />
              ))}
            </ScrollView>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}
