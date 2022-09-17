import { StyleSheet } from "react-native";

const splashStyles = StyleSheet.create({
  mainView: {
    backgroundColor: "#01AA4F",
  },
  title: {
    color: "white",
    fontSize: 50,
    display: "flex",
    alignSelf: "center",
    marginTop: "20%",
    bold: 30,
  },
  version: {
    color: "white",
    fontSize: 20,
    alignSelf: "center",
  },
  logo: { color: "white", width: 100, alignSelf: "center" },
});

export default splashStyles;
