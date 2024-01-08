import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function Profile() {
  const imageUrl =
    "https://i0.wp.com/eltallerdehector.com/wp-content/uploads/2022/06/9809d-stitch-hola-png.png?resize=500%2C500&ssl=1";

  return (
    <View style={styles.container}>
      <Image source={{ uri: imageUrl }} style={styles.image} />
      <Text style={styles.text}>Profile Page</Text>
      <StatusBar style="auto"></StatusBar>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  text: {
    fontSize: 20,
  },
});
