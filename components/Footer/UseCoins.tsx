import { View, Text, StyleSheet, Switch } from "react-native";
import React, { useState } from "react";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

interface UseCoinsProps {
  coins?: number;
}

export default function UseCoins({ coins }: UseCoinsProps) {
  const [isSwitchOn, setIsSwitchOn] = useState(false);

  const toggleSwitch = () => {
    setIsSwitchOn(!isSwitchOn);
  };

  return (
    <View style={styles.container}>
      <View style={styles.switchContainer}>
        <FontAwesome5 name="coins" size={24} color="orange" />
        <Text style={styles.text}>
          {"  "}Usar moedas? {coins != null ? `(${coins})` : ""}
        </Text>
      </View>
      <Switch
        trackColor={{ false: "#767577", true: "#767577" }}
        thumbColor={isSwitchOn ? "#f4f3f4" : "#f4f3f4"}
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
