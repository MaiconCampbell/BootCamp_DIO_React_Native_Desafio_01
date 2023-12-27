import { StyleSheet, YellowBox } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  containerHeader: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
  },
  containerLogo: {
    width: "20%",
    alignItems: "center",
  },
  logo: {
    width: "100%",
    height: "20%",
  },
  containerTitle: {
    width: "100%",
  },
  title: {
    fontSize: 45,
    color: "#000",
    marginLeft: "20%",
    textShadowColor: "rgba(255, 230, 0, 0.5)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  form: {
    flex: 1,
    width: "100%",
  },
  inline: {
    justifyContent: "flex-start",
    marginBottom: 16,
    marginLeft: 8,
  },
  label: {
    fontSize: 20,
  },
  input: {
    height: 30,
    backgroundColor: "#e7dec0",
    borderRadius: 5,
    paddingVertical: 18,
    color: "#e90b0b",
    borderWidth: 1,
    marginRight: 8,
  },
  containerBtn: {
    width: "100%",
    textAlign: "center",
    alignItems: "center",

    marginVertical: 12,
  },
  btn: {
    width: "98%",
    backgroundColor: "#bda22b",
    borderRadius: 5,
  },
  btnTxt: {
    fontSize: 28,
    textAlign: "center",
    padding: 8,
  },
});
