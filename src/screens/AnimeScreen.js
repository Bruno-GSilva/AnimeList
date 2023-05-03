import { Image, Text, View } from "react-native";
import Header from "../components/Header";
import { ButtonCategory } from "../components/Buttons/ButtonCategory";
import { ScrollView } from "react-native-gesture-handler";
import { CardHorizontal } from "../components/Cards/CardHorizontal";

export default function AnimeScreen() {
  return (
    <View className="-z-10 flex-1 items-center bg-black">
      <Header />
      <Text className="-z-10 text-2xl font-bold text-white mb-5">
        Minha Lista
      </Text>
      <View className="-z-10 flex-1 rounded-3xl bg-slate-700 p-2 mx-1">
        <View className="flex-row justify-between items-center p-5">
          <View className="w-44 h-56 border-2 border-black">
            <Image
              source={{
                uri: "https://pt.apkshki.com/storage/12708/icon_63d4e34c0e569_12708_w256.png",
              }}
              className="flex-1"
            />
          </View>
          <Text>Nome do anime</Text>
        </View>
      </View>
    </View>
  );
}
