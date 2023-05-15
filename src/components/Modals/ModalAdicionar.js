import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";

import {
  Alert,
  FlatList,
  Image,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import axios from "axios";

export function ModalAdicionar({ open }) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [getId, SetId] = useState([123,23,1,456]);
  const { navigate } = useNavigation();

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

  if (open) {
    return (
      <View className="z-20 absolute top-[300px] w-[390px] h-[520px] p-10 rounded-3xl bg-slate-600 border-2 border-sky-500 overflow-hidden">
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
        {
          results.map( anime =>{
            return(
              <Pressable
                key={anime.id}
                onPress={() => {
                  SetId(anime.id);
                  navigate("List", { getId } );
                }}
                className="flex-row items-center p-2 mb-2 border-2 border-black overflow-hidden rounded-xl active:border-amber-500">
                <Image
                  className="w-32 h-32 rounded-xl mr-2"
                  source={{ uri: anime.coverImage.large }}
                  alt={anime.title.romaji}
                />
                <Text
                  className="w-32 ml-2 my-2 text-base text-white font-semibold"
                  numberOfLines={3}>
                  {anime.title.romaji}
                </Text>
              </Pressable>
            )
          })
        }

        {/* <FlatList
          data={results}
          renderItem={(anime) => {
            return (
              <Pressable
                key={anime.item.id}
                onPress={() => {
                  SetId(anime.item.id);
                  navigate("List", { results });
                }}
                className="flex-row items-center p-2 mb-2 border-2 border-black overflow-hidden rounded-xl active:border-amber-500">
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
        /> */}
      </View>
    );
  }
}
