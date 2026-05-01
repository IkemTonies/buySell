import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import colors from "../config/colors";
import AppButton from "../components/AppButton";

function WelcomeScreen({ navigation }) {
  return (
    <ImageBackground
      blurRadius={0}
      source={require("../assets/backgroundImage.jpg")}
      resizeMode="cover"
      style={styles.background}
    >
      <View style={styles.logoContanier}>
        <Image
          style={styles.logoImage}
          source={require("../assets/logoImage.png")}
        />
        <Text style={styles.logoText}>Sell what you don't need</Text>
      </View>
      <View style={styles.buttonsContanier}>
        <AppButton title="Login" onPress={() => navigation.navigate("Login")} />
        <AppButton
          title="Register"
          color="secondary"
          onPress={() => navigation.navigate("Register")}
        />
      </View>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonsContanier: {
    padding: 20,
    width: "100%",
  },
  logoContanier: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  logoText: {
    color: "#9fc5f4",
    fontSize: 30,
    fontWeight: "bold",
    fontStyle: "italic",
  },

  logoImage: {
    width: 200,
    height: 200,
  },
});

export default WelcomeScreen;
