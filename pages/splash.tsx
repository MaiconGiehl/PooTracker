import React, { Text, View } from "react-native";
import splashStyles from "../assets/styles/splash.styles";
import {} from "react-native";
import Logo from "../src/components/atoms/Logo";

const Splash = () => (
  <View style={splashStyles.mainView}>
    <Text style={splashStyles.title}>PooTracker</Text>
    <Logo />
    <Text style={splashStyles.version}>Version 1.0</Text>
  </View>
);
export default Splash;
