import React, { Image } from "react-native";
import splashStyles from "../../../../assets/styles/splash.styles";

const Logo = () => (
  <Image
    source={require("../../../../assets/images/logo.png")}
    style={splashStyles.logo}
  ></Image>
);

export default Logo;
