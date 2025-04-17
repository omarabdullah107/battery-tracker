import React from "react";
import { View, Text, StyleSheet, Platform } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { HeaderProps } from "../models/types";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const Header: React.FC<HeaderProps> = ({ title, showIcon }) => {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.headerContainer, { paddingTop: insets.top }]}>
      <View style={styles.content}>
        {showIcon && (
          <Ionicons
            name="battery-full"
            size={24}
            color="#00ff00"
            style={styles.icon}
          />
        )}
        <Text style={styles.headerText}>{title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    paddingHorizontal: 16,
    paddingBottom: 12,
    backgroundColor: "#151414",
    borderBottomWidth: 1,
    borderBottomColor: "#5a5a5a",
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  headerText: {
    fontSize: 22,
    fontWeight: "600",
    color: "#ffffff",
    marginLeft: 8,
    textShadowColor: "rgba(255, 255, 255, 0.1)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  icon: {
    position: "absolute",
    left: 16,
    marginRight: 8,
    shadowColor: "#00ff00",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.7,
    shadowRadius: 6,
    ...Platform.select({
      android: {
        elevation: 6,
      },
    }),
  },
});

export default Header;
