import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import ProfileInfo from "../components/ProfileInfo";
import SettingsItem from "../components/SettingsItem";

const AccountScreen: React.FC = () => {
  const handleChangeEmail = () => {
    //Implementation of handling changing email would be implemented here
    console.log("Change Email");
  };

  const handleChangePassword = () => {
    //Implementation of handling changing password would be implemented here
    console.log("Change Password");
  };

  const handleNotificationSettings = () => {
    //Implementation of handling notification changes would be implemented here
    console.log("Notification Settings");
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        {/* Profile Section */}
        <View style={styles.profileSection}>
          <ProfileInfo name="John Doe" email="johndoe@example.com" />
        </View>

        {/* Settings Items Section */}
        <View style={styles.settingsSection}>
          <SettingsItem label="Change Email" onPress={handleChangeEmail} />
          <SettingsItem
            label="Change Password"
            onPress={handleChangePassword}
          />
          <SettingsItem
            label="Notification Settings"
            onPress={handleNotificationSettings}
          />
          {/* Add more settings items here if needed*/}
        </View>

        {/* Logout Section */}
        <TouchableOpacity
          style={styles.logoutButton}
          onPress={() => console.log("Logout")}
        >
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flexGrow: 1,
    justifyContent: "flex-start", // Align items to the top
    backgroundColor: "#121212", // Dark background for dark mode
    paddingHorizontal: 20,
  },

  profileSection: {
    alignItems: "center",
    marginTop: 30,
    marginBottom: 40,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#1E1E1E", // Darker background for profile section
    elevation: 5,
    shadowColor: "#000000",
    shadowOpacity: 0.2,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
  },

  settingsSection: {
    width: "100%",
    paddingVertical: 10,
  },

  logoutButton: {
    marginTop: 40,
    paddingVertical: 15,
    backgroundColor: "#FF3B30", // Bright red button for contrast in dark mode
    borderRadius: 10,
    alignItems: "center",
    elevation: 5,
    shadowColor: "#000000",
    shadowOpacity: 0.3,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
  },

  logoutText: {
    color: "#ffffff", // White text for logout button
    fontSize: 18,
    fontWeight: "bold",
  },

  text: {
    color: "#ffffff", // White text for other content
  },

  safeArea: {
    flex: 1,
    backgroundColor: "#121212", // Dark mode background
  },
});

export default AccountScreen;
