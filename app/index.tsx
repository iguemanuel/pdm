import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import GameList from "@/components/GameList";

export default function index() {
  return (
    <View style={styles.container}>
      <GameList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
});
