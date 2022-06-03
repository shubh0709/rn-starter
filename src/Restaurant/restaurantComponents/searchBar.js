import React from "react";
import { Text, StyleSheet, View, TextInput } from "react-native";
import { AntDesign } from "@expo/vector-icons";

// style={styles.easyDev}
const SearchBar = (props) => {
  const [text, onChangeText] = React.useState("Useless Text");
  const [number, onChangeNumber] = React.useState(null);

  return (
    <View style={[styles.easyDev, styles.format]}>
      <AntDesign
        style={styles.searchIcon}
        name="search1"
        size={24}
        color="black"
      />
      <TextInput
        style={styles.textInput}
        onChangeText={props.onSearchQueryChange}
        placeholder="Search"
        onSubmitEditing={}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  easyDev: {},
  format: {
    marginHorizontal: 15,
    backgroundColor: "#babdc2",
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
  },
  searchIcon: {
    marginHorizontal: 5,
  },
  textInput: {
    fontSize: 20,
    marginRight: 10,
    flex: 1,
  },
});

export default SearchBar;
