import React, { Text, View } from "react-native";
import Padlock from "../src/components/atoms/Padlock";
import loginStyles from "../assets/styles/login.styles";
import EmailInput from "../src/components/atoms/EmailInput";
import PasswordInput from "../src/components/atoms/PasswordInput";
import LoginButton from "../src/components/atoms/LoginButton";
import SignUpButton from "../src/components/atoms/SignUpButton";

const Login = () => (
  <View>
    <View style={loginStyles.grayView} />
    <View>
      <Text style={loginStyles.title}>Welcome{"\n"}Back</Text>
      <Padlock />
      <Text style={loginStyles.titleTwo}>Login</Text>
      <EmailInput />
      <PasswordInput />
      <LoginButton />
      <Text style={loginStyles.forgotPassword}>Forgot password</Text>
      <SignUpButton />
    </View>
  </View>
);
export default Login;
