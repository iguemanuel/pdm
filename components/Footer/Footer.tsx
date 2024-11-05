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
      <UseCoins coins={60} />
      <View style={styles.footer}>
        <View style={styles.pagamento}>
          <PayTotal total={100.5} />
        </View>
        <ButtonCheckup title="FAZER PEDIDO" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-end",
    borderTopWidth: 1,
    borderColor: "#f0f0f0",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    marginLeft: 5,
    borderTopWidth: 1,
    borderColor: "#f0f0f0",
  },

  pagamento:{
    justifyContent : "flex-end",
    width: "48%",
  }
});
