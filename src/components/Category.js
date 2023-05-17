import { ScrollView, Text, View } from "react-native"
import { CardVertical } from "./Cards/CardVertical"

export const Category = ({arr, text}) =>{
    return(
        <View className='scale-95'>
        <Text className="text-2xl ml-3 font-bold text-white">
          {text}
        </Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {arr.map((anime) => (
              <CardVertical
                key={anime.id}
                anime={anime}
              />
            ))}
          </ScrollView>
        </View>
    )
}