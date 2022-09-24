import React, { TextInput, View } from "react-native";
import loginStyles from "../../../../assets/styles/login.styles";
import Eye from "../Eye";

const PasswordInput = () => (
  <>
    <View>
      <TextInput
        style={loginStyles.formInputs}
        placeholder="Enter your password"
      ></TextInput>
      <Eye />
    </View>
  </>
);

export default PasswordInput;
