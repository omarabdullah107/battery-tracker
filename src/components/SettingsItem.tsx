import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { SettingsItemProps } from "../models/types";

const SettingsItem: React.FC<SettingsItemProps> = ({ label, onPress }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TouchableOpacity onPress={onPress} style={styles.button}>
        <Text style={styles.buttonText}>Change</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: "#1e293b",
    borderRadius: 8,
  },
  label: {
    fontSize: 16,
    color: "#fff",
  },
  button: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: "#4CAF50",
    borderRadius: 4,
  },
  buttonText: {
    color: "#fff",
  },
});

export default SettingsItem;
