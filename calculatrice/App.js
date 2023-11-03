import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";
import Wrapper from "./components/WrapperCalculatrice";


export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar></StatusBar>
      <SafeAreaView style={styles.container}>
        <Wrapper></Wrapper>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
