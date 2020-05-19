import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <View style={styles.background}>
      <MaterialIcons name="search" style={styles.searchIcon} color="black" />
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.inputStyle}
        placeholder="Search bar"
        value={term}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#F0EEEE",
    height: 50,
    marginHorizontal: 15,
    borderRadius: 5,
    flexDirection: "row",
    marginTop: 10,
  },
  inputStyle: {
    flex: 1,
    fontSize: 18,
  },
  searchIcon: {
    fontSize: 40,
    alignSelf: "center",
    marginHorizontal: 15,
  },
});

export default SearchBar;
