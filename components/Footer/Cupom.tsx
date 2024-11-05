import { View, Text, TextInput, StyleSheet } from "react-native";
import React from "react";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

export default function Cupom() {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons
        name="ticket-percent-outline"
        size={24}
        color="red"
      />
      <Text style={styles.text}>Cupom de Desconto:</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite seu cupom"
        placeholderTextColor="gray"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    color: "gray",
  },
  input: {
    width: "50%",
    borderColor: "black",
    padding: 5,
    borderRadius: 5,
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
    padding: 10,
    paddingLeft: 0,
    paddingRight: 0,
    marginLeft: 5,
  },
});
