import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../models/types";
import { StackNavigationProp } from "@react-navigation/stack";
import { FooterProps } from "../models/types";

const Footer: React.FC<FooterProps> = ({ screenNames }) => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const getIconName = (screenName: keyof RootStackParamList) => {
    switch (screenName) {
      case "BattaryTracker":
        return "battery-charging"; // Battery icon for Battery Tracker
      case "Account":
        return "settings"; // Settings icon for Account
      default:
        return "help"; // Default icon
    }
  };

  return (
    <View style={styles.footer}>
      {screenNames.map((screenName) => (
        <TouchableOpacity
          key={screenName}
          onPress={() => navigation.navigate(screenName)}
          style={styles.iconButton}
        >
          <Ionicons
            name={getIconName(screenName)}
            size={30}
            color="#ffffff"
            style={styles.icon}
          />
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: 10,
    backgroundColor: "#313131",
    flexDirection: "row",
    justifyContent: "space-around",
    borderColor: "#5a5a5a",
    borderWidth: 1,
    borderRadius: 20,
  },
  iconButton: {
    padding: 10,
  },
  icon: {
    opacity: 0.8,
  },
});

export default React.memo(Footer);
