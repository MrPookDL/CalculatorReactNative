//ButtonItem.js file
import React from "react";
import { StyleSheet, TouchableOpacity, Text,Dimensions } from "react-native";


//Size dynamique de l'écran pour mon font
const { width } = Dimensions.get("window");
const getResponsiveFontSize = (screenWidth) => {
  const calculatedFontSize = screenWidth / 26;
  return Math.max(16, calculatedFontSize);
};


const ButtonItem = (props) => (
  <TouchableOpacity
    style={[styles.button, props.style]}
    onPress={() => {
      if (props.onPress) {
        props.onPress(props.text);
      } else {
        console.log("You pressed on: " + props.text);
      }
    }}
  >
    <Text style={[styles.text, { fontSize: getResponsiveFontSize(width) }]}>{props.text}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    height: "90%",
    width: "24%",
    backgroundColor: "lightgrey",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#000",
  },
});

export default ButtonItem;
