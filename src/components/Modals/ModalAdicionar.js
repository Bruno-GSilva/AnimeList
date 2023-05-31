import React, { useContext, useEffect, useState } from "react";
import { Alert, FlatList } from "react-native";

import { Image, Pressable, Text, TextInput, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import axios from "axios";
import MyContext from "../Contexts/MyContext";

export function ModalAdicionar({ open, list }) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [choiceAnime, setChoiceAnime] = useState([]);

  const searchAnime = async (query) => {
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
              status
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
        search: query,
      },
    });

    setResults(response.data.data.Page.media);
  };

  const handleInputChange = (e) => {
    setQuery(e);
    searchAnime(e);
  };

  const contexto = useContext(MyContext);
  const { lista1, setLista1, lista2, setLista2, lista3, setLista3, lista4, setLista4 } = contexto;

  const getAnime = (item, lista, setLista) => {
    const isItemInList = lista.some((listItem) => listItem.id === item.id);

    if (isItemInList) {
      Alert.alert("Anime já está na lista");
    } else {
      setLista([...lista, item]);
      Alert.alert("Anime adicionado à lista");
    }
  };

  const addList = (anime) => {
    getAnime(anime, lista2, setLista2)
  };

  useEffect(() => {
    console.log(choiceAnime);
  }, [choiceAnime])

  if (open) {
    return (
      <View className="z-20 absolute top-[300px] w-[390px] h-[420px] p-10 rounded-3xl bg-slate-600 border-2 border-sky-500 overflow-hidden">
        <View className="z-30 top-[6px] left-2">
          <Icon
            name="search"
            size={23}
            color={"#000"}
            style={{
              position: "absolute",
            }}
          />
        </View>
        <TextInput
          className="w-80 rounded-lg px-9 py-1 text-white border-2 border-black focus:border-amber-500 mb-5"
          value={query}
          onChangeText={handleInputChange}
        />

        <FlatList
          data={results}
          renderItem={(anime) => {
            return (
              <Pressable
                key={anime.item.id}
                className="flex-row items-center p-2 mb-2 border-2 border-black overflow-hidden rounded-xl active:border-amber-500"
                onPress={() => setChoiceAnime(addList(anime.item))}>
                <Image
                  className="w-32 h-32 rounded-xl mr-2"
                  source={{ uri: anime.item.coverImage.large }}
                  alt={anime.item.title.romaji}
                />
                <Text
                  className="w-32 ml-2 my-2 text-base text-white font-semibold"
                  numberOfLines={3}>
                  {anime.item.title.romaji}
                </Text>
              </Pressable>
            );
          }}
        />
      </View>
    );
  }
}
