import { View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

export default function Cupom() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
      <MaterialCommunityIcons
        name="ticket-percent-outline"
        size={24}
        color="red"
      />  Insira o cupom
      </Text>
      <TouchableOpacity>
        <Text style={styles.text}>Cupom de Desconto
        <FontAwesome6 name="chevron-right" size={14} color="gray" />
        </Text>
      </TouchableOpacity>
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
    marginRight: 5,
  },
});
