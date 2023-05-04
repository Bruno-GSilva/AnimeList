import React from "react";
import { Pressable, Text } from "react-native";
import { styled } from "nativewind";

function Button({press, text, ...rest }) {
    return (
      <Pressable className="w-36 h-10 border-2 border-white justify-center items-center rounded-md my-2 shadow-2xl"{...rest} onPress={press}>
        <Text className="text-sm font-bold text-white">{text}</Text>
      </Pressable>
    );
}
export const ButtonCategory = styled(Button)