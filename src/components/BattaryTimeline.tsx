import React, { useState, useEffect, useMemo } from "react";
import {
  View,
  Text,
  StyleSheet,
  Switch,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { LineChart } from "react-native-chart-kit";
import { fetchingChargingState } from "../utils/dataService";
import { ChargingState } from "../models/types";

const BatteryTimeline: React.FC = () => {
  const [chargingData, setChargingData] = useState<ChargingState[]>([]);
  const [toggleMode, setToggleMode] = useState("charging");
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchingChargingState();
        setChargingData(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching charging state:", error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []); // fetch data once when component mounts as the Dependency Array is empty

  const updateChartData = (data: any[], mode: string) => {
    const labels: string[] = [];
    const chartData: number[] = [];

    data.forEach((item, index) => {
      const level = Number(item.chargingLevel);
      if (!isFinite(level)) return;

      const timestamp = new Date(item.date);
      if (isNaN(timestamp.getTime())) return;

      // Only add label every nth (5 points in this case) point, else push empty string
      if (index % 5 === 0) {
        labels.push(
          timestamp.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          })
        );
      } else {
        labels.push(""); // Empty string = no label shown
      }

      chartData.push(mode === "charging" ? level : 100 - level);
    });

    return { labels, data: chartData };
  };

  // Derived value for chartData using useMemo for less recalculations for better performance
  const chartData = useMemo(
    () => updateChartData(chargingData, toggleMode),
    [chargingData, toggleMode]
  );

  const toggleSwitch = () => {
    setToggleMode((prev) => (prev === "charging" ? "consumption" : "charging"));
  };

  const chartTitle =
    toggleMode === "charging"
      ? "Battery Energy Charging "
      : "Battery Energy Consumption";

  // Dynamically change shadow color based on mode
  const shadowStyle =
    toggleMode === "charging"
      ? {
          shadowColor: "#00ffcc", // Green for charging
          shadowOpacity: 0.5,
          shadowRadius: 10,
          shadowOffset: { width: 0, height: 0 },
          elevation: 10,
        }
      : {
          shadowColor: "#F44336", // Red for consumption
          shadowOpacity: 0.5,
          shadowRadius: 10,
          shadowOffset: { width: 0, height: 0 },
          elevation: 10,
        };

  return (
    <View style={[styles.container, shadowStyle]}>
      <Text style={styles.title}>{chartTitle}</Text>

      {isLoading ? (
        <ActivityIndicator size="large" color="#4CAF50" />
      ) : (
        <ScrollView horizontal style={styles.chartWrapper}>
          <LineChart
            data={{
              labels: chartData.labels,
              datasets: [{ data: chartData.data }],
            }}
            width={chartData.labels.length * 40}
            height={220}
            yAxisSuffix=" %"
            yAxisInterval={1}
            chartConfig={{
              backgroundGradientFrom: "#1e293b",
              backgroundGradientTo: "#0f172a",
              decimalPlaces: 0,
              color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
              propsForDots: {
                r: "5",
                strokeWidth: "2",
                stroke: "#3B82F6",
                fill: "#60A5FA",
              },
              propsForBackgroundLines: {
                stroke: "#334155",
              },
            }}
            bezier
            style={styles.chart}
          />
        </ScrollView>
      )}

      <View style={styles.switchContainer}>
        <Text
          style={[
            styles.switchLabelBase,
            toggleMode === "charging"
              ? styles.labelCharging
              : styles.labelConsumption,
          ]}
        >
          {toggleMode === "charging" ? "CHARGING" : "CONSUMPTION"}
        </Text>

        <Switch
          onValueChange={toggleSwitch}
          value={toggleMode === "consumption"}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0f172a",
    paddingHorizontal: 16,
    paddingTop: 20,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },

  title: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 10,
    color: "#ffff",
  },
  chartWrapper: {
    marginTop: 16,
    borderRadius: 16,
  },
  chart: {
    borderRadius: 16,
  },
  switchContainer: {
    marginTop: 16,
    marginBottom: 5,
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },

  switchLabelBase: {
    fontSize: 16,
    color: "#555", // default fallback
  },
  labelCharging: {
    color: "#4CAF50", //  nice green for dark theme
  },
  labelConsumption: {
    color: "#F44336", //  nice red for dark theme
  },
});

export default BatteryTimeline;
