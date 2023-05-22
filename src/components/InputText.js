import React from "react";
import { Text, TextInput, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export function Input(props) {
  return (
    <View>
      <Text className="font-medium text-base text-white my-2">
        {props.text ? props.text : "Insira Algo..."}
      </Text>
      <View className='z-30 top-[6px] left-2'>
      <Icon
        name={props.icon}
        size={18}
        color={"#fff"}
        
        style={
          {
            position:'absolute',
          }
        }
      />
      </View>
        <TextInput
          className="relative mb-2 w-60 rounded-lg px-8  border-2 focus:bg-slate-800 border-white text-slate-300 focus:border-yellow-500"
          secureTextEntry={!props.password ? false : true}
          placeholder={props.placeholder}
          placeholderTextColor={'gray'}
          value={props.value}
          onChangeText={props.input}
          
        >
        </TextInput>
    </View>
  );
}
