import { View, Text, SectionList, StyleSheet, Platform } from "react-native";
import React from "react";

import MOCK_GAMES from "../data/MOCK_GAMES";

const getMetacriticColor = (metacritic: number) => {
  if (metacritic >= 90) {
    return "green";
  } else if (metacritic >= 80) {
    return "orange";
  } else {
    return "red";
  }
};

export default function GameList() {
  return (
    <SectionList
      sections={MOCK_GAMES} // usa a lista de jogos com categorias
      keyExtractor={(item, index) => item.title + index}
      renderItem={({ item }) => (
        <View style={styles.itemContainer}>
          <Text style={styles.title}>Game: {item.title}</Text>
          <Text style={styles.platform}>Plataforma: {item.platform}</Text>

          <Text
            style={[
              styles.metacritic,
              { color: getMetacriticColor(item.metacritic) },
            ]}
          >
            Metacritic: {item.metacritic}
          </Text>
        </View>
      )}
      renderSectionHeader={({ section }) => (
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>{section.category}</Text>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: "#fff",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  headerContainer: {
    backgroundColor: "#26269b",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  headerText: {
    fontSize: 25,
    fontWeight: "bold",
    color: "white",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
  platform: {
    fontSize: 16,
    color: "#555",
  },
  metacritic: {
    fontSize: 14,
    color: "gray",
  },
});
