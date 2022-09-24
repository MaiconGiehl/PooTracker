import { StyleSheet } from "react-native";

const loginStyles = StyleSheet.create({
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
    marginTop: 68,
  },
  padlock: {
    width: 65,
    height: 65,
    color: "white",
    marginTop: 68,
    marginLeft: 40,
  },
  loginText: {
    marginTop: 69,
    color: "#666666",
  },
  eyeIcon: {
    width: 20,
    height: 13,
    position: "absolute",
    marginLeft: 351,
    marginTop: "11.5%",
  },
  grayView: {
    position: "absolute",
    backgroundColor: "#F5F7F9",
    marginTop: 277,
    paddingBottom: "150%",
    paddingRight: "100%",
  },
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
    color: "#999999",
    textDecorationLine: "underline",
    marginTop: 40,
    alignSelf: "center",
    fontSize: 16,
  },
  signupButton: {
    backgroundColor: "#F5F7F9",
    marginTop: 40,
    color: "#999999",
    width: 334,
    height: 50,
    fontWeight: "bold",
    borderRadius: 25,
    borderColor: "#999999",
    fontSize: 20,
    alignSelf: "center",
  },
});

export default loginStyles;
