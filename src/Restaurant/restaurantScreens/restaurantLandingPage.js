import React, { useState } from "react";
import { Text, StyleSheet, View } from "react-native";
import SearchBar from "../restaurantComponents/searchBar";

const restaurantLandingPage = () => {
  const [searchText, updateSearchText] = useState("");

  return (
    <View>
      <Text style={styles.text}>Welcome to Restraunt</Text>
      <SearchBar onSearchQueryChange={(input) => updateSearchText(input)} />
      <Text> {searchText} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default restaurantLandingPage;
