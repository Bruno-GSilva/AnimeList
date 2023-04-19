import React, { useEffect, useState } from "react";
import { Text, TextInput } from "react-native";
import { DataUser } from "./Contexts/DataUserContext";
import { Button } from "./Button";

export function Input(props) {
  const [formData, setFormData] = useState({
    login: "",
    password: "",
  });
  const [form, setForm] = useState({
    login: "",
    password: "",
  });

  function validateForm(login) { 
    setForm({ ...form, login })
    console.log(form)
  }

  useEffect(() => {
    setFormData({
      login: DataUser.map((user) => user.login),
      password: DataUser.map((user) => user.password),
    });
  }, [DataUser]);

  return (
    <>
      <Text className="font-medium text-base text-white my-2">
        {props.text ? props.text : "Insira Algo..."}
      </Text>
      <TextInput
        className="focus:bg-slate-800 border-2 border-yellow-500 rounded-lg px-2 text-slate-300 mb-2 w-60"
        secureTextEntry={!props.password ? false : true}
        placeholder="typing here..."
        onChangeText={validateForm}
      />
      {/* <Button route={validateForm} /> */}
    </>
  );
}
