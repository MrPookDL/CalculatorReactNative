//WrapperCalculatrice.js file
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import Screen from "./Screen";
import ButtonBox from "./ButtonBox";

const WrapperCalculatrice = () => {

  const [currentValue, setCurrentValue] = useState("");



  //////////////Function to handle numbers from 0 to 9//////////////
  const numberHandler = (number) => {
    setCurrentValue((prevValue) =>
      prevValue === "0" ? number : prevValue + number
    );
  };




  //////////////Function to handle backspace//////////////
  const backspaceHandler = () => {
    setCurrentValue((prevValue) =>
      prevValue.length > 1 ? prevValue.slice(0, -1) : "0"
    );
  };




  //////////////Gérer les opérateurs//////////////
  const operationHandler = (operator) => {
    // Define the operation characters for validation check
    const operationChars = ["×", "÷", "+", "-"];

    setCurrentValue((prevValue) => {
      //on enlève les espacements + on vérifie si elle est vide
      const trimmedValue = prevValue.trim();
      if (trimmedValue === "" || trimmedValue === "0") {
        return trimmedValue;
      }

      // On vérifie si il y a des opérateurs avant comme 90+90
      const lastChar = trimmedValue.slice(-1);
      if (operationChars.includes(lastChar)) {
        //Utilisé ('×' et '÷') dans mon écran. Doit le convertir
        if (operator === "*" || operator === "/") {
          operator = operator === "*" ? "×" : "÷";
        }
        return trimmedValue.slice(0, -1) + operator;
      } else {
        //Convertir l'opérateur lorsqu'on est comme 90+  ----> */-
        if (operator === "*" || operator === "/") {
          operator = operator === "*" ? "×" : "÷";
        }
        return trimmedValue + operator;
      }
    });
  };




  //////////////Calculer l'équation//////////////
  const equals = () => {
    setCurrentValue((prevValue) => {
      if (!prevValue.trim()) {
        return prevValue;
      }

      try {
        //Conversion des opérateurs non conforme
        const conversionValue = prevValue.replace(/×/g, "*").replace(/÷/g, "/");
        const result = eval(conversionValue).toString();
        return result;
      } catch (error) {
        console.error("Invalid expression:", error);
        return "Error";
      }
    });
  };




  // Function to handle the toggle of positive/negative , Inspirer de ma calculatrice de mon cellulaire
  const toggleSignHandler = () => {
    setCurrentValue((prevValue) => {
      //This is tailored to check my specific expression
      const matchLastNumber = /([-+*/])?(\(-?\d+\.?\d*\)|-?\d+\.?\d*)$/;
      const match = prevValue.match(matchLastNumber);

      if (match) {
        const [fullMatch, operator, number] = match;
        const numberStart = prevValue.lastIndexOf(fullMatch);
        let toggledNumber;
        if (number.startsWith("(-")) {
          //It removes the -() to make it postive
          toggledNumber = number.slice(2, -1);
        } else {
          // For a positive number, we add a minus sign and parentheses.
          toggledNumber = `(-${number})`;
        }
        //On combine tout les changements dans le prevValue
        return (
          prevValue.slice(0, numberStart) +
          (operator || "") +
          toggledNumber +
          prevValue.slice(numberStart + fullMatch.length)
        );
      }
      return prevValue;
    });
  };




  // Function that dynamically listens to what is on the screen
  const handleButtonPress = (buttonValue) => {
    switch (buttonValue) {
      case "C":
        setCurrentValue("");
        break;
      case "<-":
        backspaceHandler();
        break;
      case "+/-":
        toggleSignHandler();
        break;
      case "*":
      case "/":
      case "-":
      case "+":
        operationHandler(buttonValue);
        break;
      case ".":
        setCurrentValue((prevValue) =>
          prevValue.includes(".") ? prevValue : `${prevValue}.`
        );
        break;
      case "=":
        equals();
        break;
      default:
        numberHandler(buttonValue);
        break;
    }
  };

  //The view
  return (
    <View style={styles.container}>
      <Screen value={currentValue}></Screen>
      <ButtonBox onButtonPress={handleButtonPress}></ButtonBox>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#68736F",
    height: "100vh",
    width: "100vw",
    flexDirection: "column",
    alignItems: "stretch",
    justifyContent: "flex-start",
    padding: 10,
  },
});

export default WrapperCalculatrice;
