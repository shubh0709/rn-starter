import React from "react";
import { Text, StyleSheet, Image, View } from "react-native";

const ImageDetail = (props) => {
  // ypu cant do require(`path/${props.image}`)
  // https://stackoverflow.com/questions/30854232/react-native-image-require-module-using-dynamic-names
  const img = props.image;
  return (
    <View>
      <Image source={props.image} />
      <Text>{props.name} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default ImageDetail;
