import React, { TextInput } from "react-native";
import loginStyles from "../../../../assets/styles/login.styles";

const EmailInput = () => (
  <TextInput
    style={loginStyles.formInputs}
    placeholder="Enter your password"
  ></TextInput>
);

export default EmailInput;
