import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const NavigationToDiffScreens = (props) => {
  // you will get different objects being passed by navigator in here
  console.log(props);
  return (
    <View>
      <Text style={styles.text}>NavigationToDiffScreens</Text>
      <Button
        title="Go to COmponents Demo"
        onPress={() => {
          return props.navigation.navigate("Components");
        }}
      />
      <TouchableOpacity
        onPress={() => {
          return props.navigation.navigate("ListScreen");
        }}
      >
        <Text>Go to List demo</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default NavigationToDiffScreens;
