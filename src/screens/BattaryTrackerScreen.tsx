import React from "react";
import { View, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import BatteryState from "../components/BattaryState";
import BatteryTimeline from "../components/BattaryTimeline";

const BattaryTrackerScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.innerContent}>
          {/* Battary State Section */}
          <View style={styles.battaryStateContainer}>
            <BatteryState />
          </View>
          {/* Battary Charges chart Section */}
          <View style={styles.battaryTimelineContainer}>
            <BatteryTimeline />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    paddingBottom: 80, // to leave space for the footer
  },

  scrollContent: {
    paddingBottom: 100, // extra scroll room below the content
  },

  innerContent: {
    paddingHorizontal: 16,
  },

  battaryStateContainer: {
    backgroundColor: "#1a1a1a",
    borderRadius: 12,
    padding: 12,
    marginTop: 16,
    marginBottom: 16,
    borderColor: "#5a5a5a",
    borderWidth: 1,

    // White shadow for dark theme
    shadowColor: "#ffffff", // White shadow
    shadowOffset: {
      width: 0,
      height: 3, // Vertical shadow distance
    },
    shadowOpacity: 0.25, // Slight transparency
    shadowRadius: 6, // How far the shadow spreads
    elevation: 6,
  },

  battaryTimelineContainer: {
    backgroundColor: "#1a1a1a",
    borderRadius: 12,
    padding: 12,
    borderColor: "#5a5a5a",
    borderWidth: 1,
  },
});

export default BattaryTrackerScreen;
