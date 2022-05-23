import React from "react";
import { Text, StyleSheet, View } from "react-native";

const LayoutExercise = () => {
  return (
    <View>
      <Text style={styles.text}>layoutExercise</Text>
      <View style={styles.stylingView}>
        <View style={styles.boxOne}></View>
        <View style={styles.boxTwo}></View>
        <View style={styles.boxThree}></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
  stylingView: {
    borderWidth: 3,
    borderColor: "green",
    height: 200,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  boxOne: {
    borderWidth: 4,
    backgroundColor: "red",
    borderColor: "orange",
    height: 100,
    width: 50,
  },
  boxTwo: {
    borderWidth: 4,
    width: 50,
    backgroundColor: "black",
    borderColor: "orange",
    height: 100,
    top: 50,
  },
  boxThree: {
    borderWidth: 4,
    backgroundColor: "purple",
    borderColor: "orange",
    height: 100,
    width: 50,
  },
});

export default LayoutExercise;
