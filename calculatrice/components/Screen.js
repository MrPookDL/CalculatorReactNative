// Screen.js file
import React from "react";
import { View, StyleSheet, TextInput,Dimensions } from "react-native";

//Size dynamique de l'écran pour mon font
const { width } = Dimensions.get("window");


const baseFontSize = width * 0.04;

const Screen = (props) => {
  return (
    <View style={styles.box}>
      <TextInput
        style={[styles.input, { fontSize: baseFontSize }]}
        value={props.value}
        inputMode="default"
        placeholder="0"
        placeholderTextColor="#80808080"
        readOnly={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    width: "100%",
    height: "20%",
    backgroundColor: "#D8D9D7",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12.5,
    borderRadius: 5,
  },
  input: {
    flex: 1,
    width: "100%",
    margin: 12,
    padding: 10,
    textAlign: "right",
  },
});

export default Screen;
