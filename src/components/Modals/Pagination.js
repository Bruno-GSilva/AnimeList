import { Alert, Image, Pressable, ScrollView, Text, View } from "react-native";
import Header from "../Header";
import { ButtonCategory } from "../Buttons/ButtonCategory";
import { CardMini } from "../Cards/CardMini";
import { useNavigation } from "@react-navigation/native";

export function Pagination({ route }) {
  
  const { title, genres, episodes, coverImage, status, description, id } =
    route.params;


  const { navigate } = useNavigation()

  return (
    <View className="z-10 flex-1 items-center bg-black">
      <Header />
      <View className="z-10 flex-1 rounded-t-3xl bg-slate-700 p-2 mx-2">
        <View className="w-full flex-row justify-around items-end p-1">
          <View className="w-44 h-60 border-4 border-amber-500 rounded-xl overflow-hidden">
            <Image
              source={{
                uri: coverImage.large
                  ? coverImage.large
                  : "https://pt.apkshki.com/storage/12708/icon_63d4e34c0e569_12708_w256.png",
              }}
              className="flex-1"
            />
          </View>
          <View className="ml-6">
            <Text
              className="w-48 text-xl mb-1 text-white font-bold"
              numberOfLines={1}>
              {title.romaji}
            </Text>
            <Text className="text-sm text-white font-semibold">
              Temporadas: <Text className='text-slate-800'>{6}  </Text>
            </Text>
            <Text className="text-sm text-white font-semibold">
              Episodios: <Text className='text-slate-800'>{episodes}  </Text>
            </Text>
            <Text
              className="w-28 text-sm text-white font-semibold"
              numberOfLines={2}>
              Genero: <Text className='text-slate-800'>{`${genres[0]}/${genres[1]}`}  </Text>
            </Text>
            <Text className="text-sm text-white font-semibold">
              Status:{" "}
              {status === "FINISHED" ? (
                <Text className="text-sm text-green-500 font-semibold">
                  {status}
                </Text>
              ) : (
                <Text className="text-sm text-yellow-500 font-semibold">
                  {status}
                </Text>
              )}
            </Text>
            <Text className="text-sm text-white font-semibold">
              Lançamentos: <Text className='text-slate-800'>{'Terça-Feira'}  </Text>
            </Text>
            <ButtonCategory
              text={"Adicionar"}
              press={() => {
                Alert.alert('Anime Adicionado')
                navigate('List', { title, genres, episodes, coverImage, status, description, id })
              }}
              className="w-full my-0 mt-2 bg-amber-500 border-black active:border-white active:bg-black"
            />
          </View>
        </View>
        <View className="">
          <Text className="text-2xl text-white font-bold my-2">Sinopse:</Text>
          <Text className="w-96 text-slate-900" numberOfLines={6}>
            {description}
          </Text>
          <Text className="text-2xl text-white font-bold my-2">
            Relacionados:
          </Text>
          <ScrollView horizontal>
            <CardMini />
            <CardMini />
            <CardMini />
            <CardMini />
          </ScrollView>
        </View>
      </View>
    </View>
  );
}
