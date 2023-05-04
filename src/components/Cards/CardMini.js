import React from "react"
import { Image, Text, Pressable } from "react-native"
import { styled } from "nativewind"

const Card = ({...rest}) =>{
    return(
        <Pressable className="w-32 h-48 border-2 rounded-md justify-end items-center p-2 active:border-amber-500 mx-1" {...rest}>
        <Image
          source={{
            uri: "https://pt.apkshki.com/storage/12708/icon_63d4e34c0e569_12708_w256.png",
          }}
          className="w-full h-full absolute"
        />
        <Text className="w-28 text-center text-sm text-black bg-[#ffffff50] font-extrabold">
          Titulo do Anime
        </Text>
      </Pressable>
    )
}

export const CardMini = styled(Card)