import { View, Text, StyleSheet, Switch } from "react-native";
import React, { useState } from "react";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

export default function UseCoins() {
  const [isSwitchOn, setIsSwitchOn] = useState(false);

  const toggleSwitch = () => {
    setIsSwitchOn(!isSwitchOn);
  };

  return (
    <View style={styles.container}>
      <View style={styles.switchContainer}>
        <Text style={styles.text}>
          <FontAwesome5 name="coins" size={24} color="orange" />
          {"  "}Usar moedas?
        </Text>
      </View>
      <Switch
        trackColor={{ false: "#767577", true: "#767577" }}
        thumbColor={isSwitchOn ? "#f5dd4b" : "#f4f3f4"}
        onValueChange={toggleSwitch}
        value={isSwitchOn}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
    padding: 10,
    paddingLeft: 0,
    marginLeft: 5,
  },
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 10,
  },
  text: {
    fontSize: 16,
    color: "gray",
  },
});
