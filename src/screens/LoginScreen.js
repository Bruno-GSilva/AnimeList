import React  from "react";
import { useNavigation } from "@react-navigation/native";

import { Pressable, Text, View, ImageBackground, Alert } from "react-native";
import { ButtonPrimary } from "../components/Buttons/ButtonPrimary";
import { Input } from "../components/InputText";
import Icon from "react-native-vector-icons/FontAwesome";

// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { getAuth, signInWithEmailAndPassword } from "firebase/auth";


export default function LoginScreen({ navigation }) {
  const { navigate } = useNavigation();

  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [user, setUser] = useState(false);

  // const storeUserLogin = async () => {
  //   try {
  //     await AsyncStorage.setItem('userLoggedIn', 'true');
  //   } catch (error) {
  //     console.log('Error storing user login state:', error);
  //   }
  // };

  

  // function validation() {
  //   const auth = getAuth();
  //   signInWithEmailAndPassword(auth, email, password)
  //     .then((userCredential) => {
  //       setUser(true);
  //       storeUserLogin(); // Armazena o estado de login como "true" no AsyncStorage
  //     })
  //     .catch((error) => {
  //       setUser(false);
  //       const errorCode = error.code;
  //       const errorMessage =
  //         errorCode === "auth/user-not-found"
  //           ? "Usuário não encontrado."
  //           : errorCode === "auth/wrong-password"
  //           ? "Senha incorreta."
  //           : "Erro desconhecido. Tente novamente mais tarde.";

  //       Alert.alert(errorMessage);
  //     });
  // }

  // useEffect(() => {
  //   const checkUserLogin = async () => {
  //     try {
  //       const value = await AsyncStorage.getItem('userLoggedIn');
  //       if (value === 'true') {
  //         setUser(true);
  //       }
  //     } catch (error) {
  //       console.log('Error checking user login state:', error);
  //     }
  //   };

  //   checkUserLogin(); // Verifica o estado de login ao carregar o componente

  //   if (user === true) {
  //     navigate("Home");
  //   }
  // }, [user]);

  return (
    <ImageBackground
      source={{
        uri: "https://images6.alphacoders.com/656/thumb-1920-656029.png",
      }}
      blurRadius={5}
      resizeMode="cover"
      className="flex-1">
      <View className="flex-1 justify-center items-center">
        <View className="h-auto justify-around items-start px-8 py-10 border-4 border-yellow-500 rounded-xl scale-110 bg-black shadow-2xl shadow-white">
          <Text className="font-bold text-xl text-white mb-4">
            Faça seu login aqui
          </Text>
          <Text className=" text-white mb-3">
            Não tem login?
            <Text
              className="text-amber-500"
              onPress={() => navigation.navigate("Register")}>
              {" "}
              cadastrar-se aqui!
            </Text>
          </Text>
          <View>
            <Input
              text={"Login"}
              icon={"user"}
              value={email}
              input={(e) => setEmail(e)}
              placeholder={"Digite seu login aqui..."}
            />
            <Input
              text={"Password"}
              password={true}
              icon={"lock"}
              value={password}
              input={(e) => setPassword(e)}
              placeholder={"Digite sua senha aqui..."}
            />
            <ButtonPrimary text={"Entrar"} route={validation} />
            <Text className="text-white text-base text-center mb-2">
              - or -
            </Text>
            <View className="justify-center flex-row">
              <Pressable className="h-12 w-12 rounded-2xl mr-3 my-2 justify-center items-center border-2 border-white active:border-amber-500">
                <Icon name="github" size={23} color={"#fff"} />
              </Pressable>
              <Pressable className="h-12 w-12 rounded-2xl mr-3 my-2 justify-center items-center border-2 border-white active:border-amber-500">
                <Icon name="google" size={23} color={"#fff"} />
              </Pressable>
              <Pressable className="h-12 w-12 rounded-2xl mr-0 my-2 justify-center items-center border-2 border-white active:border-amber-500">
                <Icon name="facebook" size={23} color={"#fff"} />
              </Pressable>
            </View>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}
