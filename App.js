import React from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";

import styles from "./style/styles";

console.log(styles);

// const image = { uri: "./assets/images/star-trails.jpg" };

export default App = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("./assets/images/planet.png")}
        style={styles.image}
      >
        <View style={styles.form}>
          <View>
            <Text style={styles.inputTitle}>Email</Text>
            <TextInput style={styles.input} textAlign={"center"} />
          </View>
          <View style={{ marginTop: 20 }}>
            <Text style={styles.inputTitle}>password</Text>
            <TextInput
              style={styles.input}
              textAlign={"center"}
              secureTextEntry
            />
          </View>

          <TouchableOpacity style={styles.btn} activeOpacity={0.8}>
            <Text style={styles.btnText}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};
