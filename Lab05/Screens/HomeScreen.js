import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image source={require("../assets/img4.png")} style={styles.logo} />
      <Text style={styles.title}>¡Bienvenido a PetCareApp!</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Consejos")}
      >
        <Text style={styles.buttonText}>Ver Consejos</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Refugios")}
      >
        <Text style={styles.buttonText}>Refugios y Adopción</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "skyblue",
    padding: 10,
    width: "60%",
    alignItems: "center",
    borderRadius: 10,
    marginVertical: 10,
  },
  buttonText: {
    fontSize: 16,
    color: "white",
  },
});

export default HomeScreen;
