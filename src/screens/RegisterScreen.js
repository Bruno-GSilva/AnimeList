import React, { useEffect, useState } from "react";
import { Text, View, ImageBackground, Alert } from "react-native";
import { Input } from "../components/InputText";
import { ButtonPrimary } from "../components/Buttons/ButtonPrimary";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export default function RegisterScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(false);

  const handleSignup = () => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // O usuário foi criado com sucesso
        // Alert.alert("User created:", userCredential.user);
        setUser(true)
      })
      .catch((error) => {
        // Ocorreu um erro durante o cadastro
        // Alert.alert("Signup error:", error);
      });
  };

  useEffect(() => {
    if (user === true) {
      navigation.navigate("Login");
      Alert.alert('User created')
    }
  }, [user]);


  return (
    <ImageBackground
      source={{
        uri: "https://images6.alphacoders.com/656/thumb-1920-656029.png",
      }}
      blurRadius={5}
      resizeMode="cover"
      className="flex-1">
      <View className="flex-1 justify-center items-center">
        <View className="h-auto justify-around items-start px-8 py-10 border-4 border-yellow-700 rounded-xl scale-110 bg-black shadow-2xl shadow-white">
          <Text className="font-bold text-xl text-white mb-6">
            Faça seu cadastro aqui
          </Text>
          <View>
            <Input
              text={"Email"}
              icon={"envelope"}
              placeholder={"Digite seu email aqui..."}
              value={email}
              input={setEmail}
            />
            <Input
              text={"Login"}
              icon={"user"}
              placeholder={"Digite seu login aqui..."}
            />
            <Input
              text={"Password"}
              password={true}
              icon={"lock"}
              placeholder={"Digite sua senha aqui..."}
              value={password}
              input={setPassword}
            />
            <ButtonPrimary
              text={"Cadastrar"}
              route={handleSignup}
            />
            <Text className=" text-white mt-2">
              Já possui login?
              <Text
                className="text-amber-500"
                onPress={() => {
                  navigation.navigate("Login");
                }}>
                {" "}
                entre Aqui!
              </Text>
            </Text>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}
