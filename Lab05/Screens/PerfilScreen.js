// PerfilScreen.js
import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const PerfilScreen = ({ route }) => {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/perfil.png")} style={styles.imagen} />
      <Text>Estefany Castro</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  imagen: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  nombre: {
    fontSize: 24,
    fontWeight: "bold",
  },
  especie: {
    fontSize: 18,
  },
});

export default PerfilScreen;
