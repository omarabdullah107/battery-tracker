import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { fetchingChargingState } from "../utils/dataService";
import { ChargingState } from "../models/types";
import { formatDate } from "../utils/formatDate";

const BatteryState: React.FC = () => {
  const [chargingState, setChargingState] = useState<ChargingState | null>(
    null
  );
  const [lastUpdated, setLastUpdated] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchingChargingState();
        const lastState = data[data.length - 1]; // Get the most recent charging state (last element)

        // Use the helper function to format the date for human readability
        const formattedDate = formatDate(lastState.date);

        setChargingState(lastState);
        setLastUpdated(formattedDate); // Set the last updated time to the timestamp(date in the json) of the last charging state
      } catch (error) {
        console.error("Error fetching charging state:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <View style={styles.stateContainer}>
      <Text style={styles.currentLevel}>
        Charging Level: {chargingState?.chargingLevel}%
      </Text>
      <Text style={styles.lastUpdated}>Last Updated: {lastUpdated}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  stateContainer: {
    padding: 16,
  },
  currentLevel: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#ffff",
  },
  lastUpdated: {
    fontSize: 16,
    color: "gray",
  },
});

export default BatteryState;
