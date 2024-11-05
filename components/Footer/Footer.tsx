import { View, StyleSheet } from "react-native";
import React from "react";
import ButtonCheckup from "./ButtonCheckup";
import PayTotal from "./PayTotal";
import UseCoins from "./UseCoins";
import Cupom from "./Cupom";

export default function Footer() {
  return (
    <View style={styles.container}>
      <Cupom />
      <UseCoins />
      <View style={styles.footer}>
        <PayTotal total={100.5} />
        <ButtonCheckup title="FAZER PEDIDO" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-end",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "white",
    marginLeft: 5,
  },
});
