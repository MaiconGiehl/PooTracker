import { StyleSheet } from "react-native";

const splashStyles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: "#01AA4F",
    paddingBottom: "%",
  },
  title: {
    color: "white",
    fontSize: 30,
    display: "flex",
    alignSelf: "center",
    marginTop: 208,
    fontWeight: "bold",
  },
  version: {
    color: "white",
    fontSize: 16,
    alignSelf: "center",
    marginTop: 325,
  },
  logo: {
    marginTop: 141,
    width: 190,
    height: 128,
    alignSelf: "center",
  },
});

export default splashStyles;
