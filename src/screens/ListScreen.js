import React from "react";
import { Text, StyleSheet, FlatList, View } from "react-native";

const ListScreen = () => {
  const friends = [
    { name: "harry" },
    { name: "ben" },
    { name: "ten" },
    { name: "kate" },
    { name: "rodrigo" },
  ];

  // giving key within object (not a good one as in this way
  // we have to always give keys with every object)
  // instead use keyExtractor prop
  const friendsCloneWithKeys = [
    { name: "harry", key: "harry" },
    { name: "ben", key: "ben" },
    { name: "ten", key: "ten" },
    { name: "kate", key: "kate" },
    { name: "rodrigo", key: "rodrigo" },
  ];

  const friendsWithAges = [
    { name: "harry", age: "22" },
    { name: "ben", age: "30" },
    { name: "ten", age: "13" },
    { name: "kate", age: "45" },
    { name: "rodrigo", age: "28" },
  ];

  return (
    <View>
      <FlatList
        data={friends}
        renderItem={(element) => {
          // element === {item: {name: "harry"}, index: 0}
          return <Text> {element.item.name} </Text>;
        }}
      />

      <FlatList
        data={friendsCloneWithKeys}
        renderItem={(element) => {
          // element === {item: {name: "harry"}, index: 0}
          return <Text> {element.item.name} </Text>;
        }}
      />

      <FlatList
        keyExtractor={(friend) => friend.name}
        data={friends}
        renderItem={(element) => {
          // element === {item: {name: "harry"}, index: 0}
          return <Text> {element.item.name} </Text>;
        }}
      />

      <Text> horizontal scrolling </Text>
      {/* make list  horizontal, use prop : horizontal 
        wanna remove the scrollbar as well, use prop: showsHorizontalScrollIndicator={false} ??
     */}
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(friend) => friend.name}
        data={friends}
        renderItem={(element) => {
          // element === {item: {name: "harry"}, index: 0}
          return <Text style={styles.textStyle}> {element.item.name} </Text>;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 50,
  },
});

export default ListScreen;
