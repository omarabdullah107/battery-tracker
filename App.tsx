import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { RootStackParamList } from "./src/models/types";
import BatteryTrackerScreen from "./src/screens/BattaryTrackerScreen";
import AccountScreen from "./src/screens/AccountScreen";
import Footer from "./src/components/Footer";
import Header from "./src/components/Header";

const Stack = createStackNavigator<RootStackParamList>();

const App = () => {
  const [headerTitle, setHeaderTitle] = useState("Battery Tracker");
  const [iconScreen, setIconScreen] = useState("BattaryTracker");

  return (
    <SafeAreaProvider style={styles.container}>
      <NavigationContainer
        onStateChange={(state) => {
          if (state) {
            const routeName = state.routes[state.index]?.name;
            setIconScreen(routeName);
          }
        }}
      >
        {/* The App Header Section */}
        <View>
          <Header
            title={headerTitle}
            showIcon={iconScreen === "BattaryTracker"}
          />
        </View>
        {/* The Main Navigation Stacks that holds the main screens of the app*/}
        <Stack.Navigator
          initialRouteName="BattaryTracker"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen
            name="BattaryTracker"
            component={BatteryTrackerScreen}
            listeners={{
              focus: () => setHeaderTitle("Battery Tracker"),
            }}
          />
          <Stack.Screen
            name="Account"
            component={AccountScreen}
            listeners={{
              focus: () => setHeaderTitle("Account Settings"),
            }}
          />
        </Stack.Navigator>
        <Footer screenNames={["BattaryTracker", "Account"]} />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
