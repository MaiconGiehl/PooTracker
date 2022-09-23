import { StyleSheet } from "react-native";

const loginStyles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: "#F5F7F9 50%, ",
    // marginTop: "270px",
  },
  title: {
    color: "#01AA4F",
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 99,
    marginLeft: 40,
  },
  titleTwo: {
    fontSize: 20,
    color: "#666666",
    fontWeight: "bold",
    marginLeft: 40,
    marginTop: 69,
  },
  padlock: {
    width: 65,
    height: 65,
    color: "white",
    marginTop: 68,
    marginLeft: 40,
  },
  loginText: { marginTop: 69, color: "#666666" },
  formInputs: {
    marginLeft: 40,
    fontSize: 16,
    marginTop: 40,
    width: "80%",
    borderBottomWidth: 1,
    paddingBottom: 30,
    color: "#666666",
  },
  loginButton: {
    marginTop: 40,
    color: "white",
    backgroundColor: "#01AA4F",
    width: 334,
    height: 50,
    borderRadius: 25,
    border: "none",
    fontSize: 20,
    fontWeight: "bold",
    alignSelf: "center",
  },
  forgotPassword: {
    marginTop: 40,
    marginBottom: 40,
  },
});

export default loginStyles;
