//ButtonBox.js file
import React from "react";
import { View, StyleSheet} from "react-native";
import ButtonItem from "./ButtonItem";

const ButtonBox = ({ onButtonPress }) => {

  return (
    <View style={styles.ButtonBox}>
      <View style={styles.parent}>
        {/* Row 1 */}
        <View style={styles.container}>
        <ButtonItem text="C" onPress={() => onButtonPress('C')} />
          <ButtonItem text="+/-" onPress={() => onButtonPress('+/-')}/>
          <ButtonItem text="<-" onPress={() => onButtonPress('<-')}/>
          <ButtonItem text="/" onPress={() => onButtonPress('/')}/>
        </View>
        {/* Row 2 */}
        <View style={styles.container}>
          <ButtonItem text="7" onPress={() => onButtonPress('7')}/>
          <ButtonItem text="8" onPress={() => onButtonPress('8')} />
          <ButtonItem text="9" onPress={() => onButtonPress('9')}/>
          <ButtonItem text="*" onPress={() => onButtonPress('*')}/>
        </View>
        {/* Row 3 */}
        <View style={styles.container}>
          <ButtonItem text="4" onPress={() => onButtonPress('4')}/>
          <ButtonItem text="5" onPress={() => onButtonPress('5')}/>
          <ButtonItem text="6" onPress={() => onButtonPress('6')}/>
          <ButtonItem text="-" onPress={() => onButtonPress('-')}/>
        </View>
        {/* Row 4 */}
        <View style={styles.container}>
          <ButtonItem text="1" onPress={() => onButtonPress('1')}/>
          <ButtonItem text="2" onPress={() => onButtonPress('2')}/>
          <ButtonItem text="3" onPress={() => onButtonPress('3')}/>
          <ButtonItem text="+" onPress={() => onButtonPress('+')}/>
        </View>
        {/* Row 5 */}
        <View style={styles.container}>
          <ButtonItem text="0" onPress={() => onButtonPress('0')}/>
          <ButtonItem text="." onPress={() => onButtonPress('.')}/>
          <ButtonItem text="=" style={styles.equals} onPress={() => onButtonPress('=')}/>
        </View>
      </View>
    </View>
  );
};
//dsad

const styles = StyleSheet.create({
  ButtonBox: {
    flex: 3,
    width: "100%",
    backgroundColor: "#474F59",
    justifyContent: "center",
    alignItems: "stretch",
    borderRadius: 5,
  },
  parent: {
    flex: 1,
    flexDirection: "column",
    padding: 5,
  },
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  equals: {
    height: "90%",
    width: "49.3%",
    backgroundColor: "lightgrey",
    borderRadius: 5,
  },
});

export default ButtonBox;
