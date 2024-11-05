import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { DEFAULT_COLOR } from "@/constants/Default";

interface PayTotalProps {
  total: number;
}

export default function PayTotal({ total }: PayTotalProps) {
  return (
    <View>
      <Text style={styles.text}>Pagamento Total</Text>
      <Text style={styles.textTotal}>R$ {total}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  textTotal: {
    fontSize: 20,
    fontWeight: "bold",
    color: DEFAULT_COLOR,
  },
  text: {
    fontSize: 16,
    color: "gray",
  },
});
