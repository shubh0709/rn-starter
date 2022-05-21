import React from "react";
import { Text, StyleSheet, View } from "react-native";
import ImageDetail from "../ReusableComponents/ImageDetail";

const ImageScreen = () => {
  return (
    <View>
      <ImageDetail name="beach" image={require("../../assets/beach.jpg")} />
      <ImageDetail
        name="mountain"
        image={require("../../assets/mountain.jpg")}
      />
      <ImageDetail name="forest" image={require("../../assets/forest.jpg")} />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default ImageScreen;
