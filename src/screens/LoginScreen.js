import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { ButtonPrimary } from "../components/Buttons/ButtonPrimary";
import { Input } from "../components/InputText";
// import { DataUser } from "../components/Contexts/DataUserContext";

export default function LoginScreen({ navigation }) {
  // const [formData, setFormData] = useState({
  //   login: "",
  //   password: "",
  // });
  // const [form, setForm] = useState({
  //   login: "",
  //   password: "",
  // });

  // function validateForm(login, password) {
  //   setForm((e)=> {
  //     e.login =  login,
  //     e.password = password
  //   })
  //   DataUser.map((e)=>{
  //     if(form.login === e.login){
  //       console.log("deu bom")
  //     }else{
  //       console.log("deu ruim")
  //     }
  //   })
  //   console.log(formData)
  // }  
  
  // useEffect(() => {
  //   setFormData({
  //     login: DataUser.map((user) => user.login),
  //     password: DataUser.map((user) => user.password),
  //   });
  // }, [DataUser]);

  return (
    <View className="flex-1 justify-center items-center bg-black">
      <View className="h-auto justify-around items-start px-8 py-10 border-4 border-yellow-700 rounded-xl scale-110 bg-black shadow-2xl shadow-white">
        <Text className="font-bold text-xl text-white mb-6">
          Faça seu login aqui
        </Text>
        <View>
          <Input
            text={"Login"}
            validate={(login) => validateForm(form.login, login)}
          />
          <Input
            text={"Password"}
            password={true}
            validate={(password) => validateForm(form.password, password)}
          />

          <ButtonPrimary
            text={"Entrar"}
            route={() => navigation.navigate("Home")}
          />
          <Text className=" text-white mt-2">
            Não tem login?
            <Text
              className="text-amber-500"
              onPress={() => navigation.navigate("Register")}>
              {" "}
              cadastrar-se aqui!
            </Text>
          </Text>
        </View>
      </View>
    </View>
  );
}
