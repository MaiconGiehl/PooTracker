import React, { Image } from "react-native";
import loginStyles from "../../../../assets/styles/login.styles";

const Eye = () => (
  <Image
    source={require("../../../../assets/images/Eye.png")}
    style={loginStyles.eyeIcon}
  ></Image>
);

export default Eye;
