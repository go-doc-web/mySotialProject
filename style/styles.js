import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "#eaeaea",
  },
  image: {
    flex: 1,
    // alignItems: "center",
    justifyContent: "center",
    resizeMode: "content",
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: "#f0f8ff",
    borderRadius: 6,
    fontSize: 18,

    color: "#f0f8ff",
  },
  form: {
    marginHorizontal: 40,
  },
  inputTitle: {
    marginBottom: 10,
    fontSize: 18,
    color: "#f0f8ff",
    textTransform: "uppercase",
  },
  btn: {
    backgroundColor: "#0000ff",
    height: 40,
    borderRadius: 6,
    marginTop: 35,
    justifyContent: "center",
    alignItems: "center",
  },
  btnText: {
    fontSize: 20,

    color: "#f0f8ff",
  },
});

export default styles;
