import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { Card } from "react-native-paper";

export default function Usuarios({ id, email, name, phone, profileImage }) {
  return (
    <Card style={styles.container}>
      <View style={styles.userInfo}>
        {profileImage !== "" && (
          <Image source={{ uri: profileImage }} style={styles.profileImage} />
        )}
        <View style={styles.userDetails}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.email}>{email}</Text>
          <Text style={styles.phone}>{phone}</Text>
        </View>
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f0f0f0",
    padding: 10,
    margin: 5,
    borderRadius: 10,
  },
  userInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  userDetails: {
    flex: 1,
    marginLeft: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
  },
  email: {
    fontSize: 16,
  },
  phone: {
    fontSize: 16,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
});
