import React, { Text, View } from "react-native";
import Padlock from "../src/components/atoms/Padlock";
import loginStyles from "../assets/styles/login.styles";
import EmailInput from "../src/components/atoms/EmailInput";
import PasswordInput from "../src/components/atoms/PasswordInput";
import LoginButton from "../src/components/atoms/LoginButton";

const Login = () => (
  <View style={loginStyles.mainView}>
    <Text style={loginStyles.title}>Welcome{"\n"}Back</Text>
    <Padlock />
    <Text style={loginStyles.titleTwo}>Login</Text>
    <EmailInput />
    <PasswordInput />
    <LoginButton />
  </View>
);
export default Login;
