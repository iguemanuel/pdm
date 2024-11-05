import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { DEFAULT_COLOR } from "@/constants/Default";

interface ButtonProps {
  title: string;
}

export default function ButtonCheckup({ title }: ButtonProps) {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: DEFAULT_COLOR,
    padding: 15,
    width: "50%",
  },
  text: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },
});
