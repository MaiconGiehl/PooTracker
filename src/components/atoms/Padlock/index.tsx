import React, { Image } from "react-native";
import loginStyles from "../../../../assets/styles/login.styles";

const Logo = () => (
  <Image
    source={require("../../../../assets/images/padlock.png")}
    style={loginStyles.padlock}
  ></Image>
);

export default Logo;
