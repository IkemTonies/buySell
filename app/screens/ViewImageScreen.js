import React from "react";
import { Image, ImageBackground, StyleSheet, View } from "react-native";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function ViewImageScreen(props) {
  return (
    <View style={styles.contanier}>
      <View style={styles.closeIcon}>
        <MaterialCommunityIcons name="close" size={35} color="#fff" />
      </View>
      <View style={styles.deleteIcon}>
        <MaterialCommunityIcons
          name="trash-can-outline"
          size={35}
          color="#fff"
        />
      </View>
      <ImageBackground
        style={styles.image}
        source={require("../assets/HomeImage.png")}
        resizeMode="contain"
      >
        <View style={styles.logoimageContanier}>
          <Image
            source={require("../assets/logoImage.png")}
            style={styles.logoimage}
          />
        </View>
      </ImageBackground>
    </View>
  );
}
const styles = StyleSheet.create({
  closeIcon: {
    position: "absolute",
    top: 40,
    left: 30,
  },
  contanier: {
    backgroundColor: colors.black,
    flex: 1,
  },
  deleteIcon: {
    position: "absolute",
    top: 40,
    right: 30,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  logoimageContanier: {
    position: "absolute",
    top: 230,
    right: 20,
  },
  logoimage: {
    width: 200,
    height: 200,
  },
});

export default ViewImageScreen;
