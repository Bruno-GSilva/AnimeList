import { Alert, Image, Pressable, ScrollView, Text, View } from "react-native";
import Header from "../components/Header";
import { ButtonCategory } from "../components/Buttons/ButtonCategory";

export function AnimeScreen() {
  return (
    <View className="z-10 flex-1 items-center bg-black">
      <Header />
      <View className="-z-10 w-full h-full bg-slate-700">
        <View className="w-full flex-row justify-around items-center p-5">
          <View className="w-44 border-2 border-black rounded-md">
            <Image
              source={{
                uri: "https://pt.apkshki.com/storage/12708/icon_63d4e34c0e569_12708_w256.png",
              }}
              className="flex-1"
            />
          </View>
          <View className="ml-6">
            <Text className="text-2xl mb-4 text-white font-semibold">
              Nome do anime
            </Text>
            <Text className="text-sm text-white font-semibold">
              Temporadas: 2
            </Text>
            <Text className="text-sm text-white font-semibold">
              Episodios: 22
            </Text>
            <Text className="text-sm text-white font-semibold">
              Genero: shonen
            </Text>
            <Text className="text-sm text-white font-semibold">
              Status: completo
            </Text>
            <Text className="text-sm text-white font-semibold">
              Lançamentos: Terça-Feira
            </Text>
            <ButtonCategory
              text={"Adicionar"}
              press={()=> Alert.alert('Anime Adicionado')}
              className="w-full my-4 bg-amber-500 border-black active:border-white"

            />
          </View>
        </View>
        <View className="ml-4">
          <Text className="text-2xl text-white font-bold my-2">Sinopse:</Text>
          <Text className="w-96 text-slate-500" numberOfLines={6}>
            ssssssssssssssasdaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaddddddddddddddddddddddddddddddddddddddddddddddddddddddasda
            ssssssssssssssasdaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaddddddddddddddddddddddddddddddddddddddddddddddddddddddasda
            Ver Maissssssaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaddddddddddddddddddddddddddddddddddddddddddddddddddddddasda.
          </Text>
          <Text className="text-2xl text-white font-bold my-2">
            Relacionados:
          </Text>
          <ScrollView horizontal>
            <Pressable className="w-32 h-48 mr-2 border rounded-md justify-end items-center p-2 active:border-amber-500">
              <Image source={{uri:'https://pt.apkshki.com/storage/12708/icon_63d4e34c0e569_12708_w256.png'}} className='w-full h-full absolute'/>
              <Text className='text-center text-sm text-black bg-[#ffffff50] font-extrabold'>
                Titulo do Anime
              </Text>
            </Pressable>
            <Pressable className="w-32 h-48 mr-2 border rounded-md justify-end items-center p-2 active:border-amber-500">
              <Image source={{uri:'https://pt.apkshki.com/storage/12708/icon_63d4e34c0e569_12708_w256.png'}} className='w-full h-full absolute'/>
              <Text className='text-center text-sm text-black bg-[#ffffff50] font-extrabold'>
                Titulo do Anime
              </Text>
            </Pressable>
            <Pressable className="w-32 h-48 mr-2 border rounded-md justify-end items-center p-2 active:border-amber-500">
              <Image source={{uri:'https://pt.apkshki.com/storage/12708/icon_63d4e34c0e569_12708_w256.png'}} className='w-full h-full absolute'/>
              <Text className='text-center text-sm text-black bg-[#ffffff50] font-extrabold'>
                Titulo do Anime
              </Text>
            </Pressable>
            <Pressable className="w-32 h-48 mr-2 border rounded-md justify-end items-center p-2 active:border-amber-500">
              <Image source={{uri:'https://pt.apkshki.com/storage/12708/icon_63d4e34c0e569_12708_w256.png'}} className='w-full h-full absolute'/>
              <Text className='text-center text-sm text-black bg-[#ffffff50] font-extrabold'>
                Titulo do Anime
              </Text>
            </Pressable>
            <Pressable className="w-32 h-48 border rounded-md justify-end items-center p-2 active:border-amber-500">
              <Image source={{uri:'https://pt.apkshki.com/storage/12708/icon_63d4e34c0e569_12708_w256.png'}} className='w-full h-full absolute'/>
              <Text className='text-center text-sm text-black bg-[#ffffff50] font-extrabold'>
                Titulo do Anime
              </Text>
            </Pressable>
          </ScrollView>
        </View>
      </View>
    </View>
  );
}
