import React from "react";
import { Text, StyleSheet, View } from "react-native";

// style={styles.easyDev}
const HomeScreen = () => {
  return (
    <View>
      <Text style={styles.text}>HomeScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
  easyDev: {
    borderWidth: 4,
    borderColor: "red",
  },
});

export default HomeScreen;
