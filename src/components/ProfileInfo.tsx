import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { ProfileInfoProps } from "../models/types";

const ProfileInfo: React.FC<ProfileInfoProps> = ({ name, email, imageUri }) => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: imageUri || "https://randomuser.me/api/portraits/men/1.jpg",
        }}
        style={styles.profileImage}
      />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.email}>{email}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginBottom: 30,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  email: {
    fontSize: 14,
    color: "#aaa",
  },
});

export default ProfileInfo;
