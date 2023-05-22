import React, { useEffect, useState } from "react";
import { Alert, Image, Pressable, Text, View } from "react-native";
import { useNavigation , useRoute } from "@react-navigation/native";

import AsyncStorage from '@react-native-async-storage/async-storage';
import { getAuth, signOut } from 'firebase/auth';

import { Menu } from "./Modals/Menu";

export default function Header() {

  const [options, setOpitions] = useState(false)
  const [user, setUser] = useState(false);

  const route = useRoute()

  const { navigate } = useNavigation();

  const handleLogout = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        setUser(true)
        // O logout foi realizado com sucesso
        console.log('User logged out');
      })
      .catch((error) => {
        // Ocorreu um erro durante o logout
        console.log('Logout error:', error);
      });
  };
  const clearUserLogin = async () => {
    try {
      await AsyncStorage.removeItem('userLoggedIn');
    } catch (error) {
      console.log('Error clearing user login state:', error);
    }
  };

  useEffect(() => {
    if (user === true) {
      navigate("Login");
      clearUserLogin()
      Alert.alert('Logout', 'Logout realizado com sucesso');
    }
  }, [user, navigate]);

  return (
    <View className="z-30 w-full m-4 border-b-2 border-slate-700 p-4 flex-row justify-between items-center bg-black">
      <View className="z-50 flex-row items-center">
        <Pressable className="w-20 h-20 border-2 rounded-full border-amber-500 overflow-hidden mr-5 active:border-white" onPress={()=>setOpitions(!options)}>
          <Image
            source={{
              uri: "https://64.media.tumblr.com/f604cc8f695c04b1ba8d9ceb9e74f87b/tumblr_pph6coG18x1u1ycqw_400.jpg",
            }}
            className="flex-1"
          />
        </Pressable>
        <Text className="text-white font-bold text-xl">Gaby</Text>
      </View>
      <View className='flex-row gap-2'>
        {
          route.name !== 'Home'?(
              <Pressable className="w-16 h-16 p-2 border-2 rounded-full bg-white overflow-hidden active:border-amber-500" onPress={() => navigate("Home")}>
          <Image
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/69/69524.png",
            }}
            className="flex-1"
          />
        </Pressable>
          ): null
        }

        <Pressable className="w-16 h-16 p-2 border-2 rounded-full bg-white overflow-hidden active:border-amber-500" onPress={handleLogout}>
          <Image
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/9258/9258147.png",
            }}
            className="flex-1"
          />
        </Pressable>
      </View>
      <Menu isOpen={options}/>
    </View>
  );
}
