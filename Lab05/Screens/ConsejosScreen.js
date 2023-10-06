import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const ConsejosScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Image source={require("../assets/img1.png")} style={styles.icon} />
        <Text style={styles.sectionTitle}>Consejos para Perros</Text>
        <Text style={styles.consejo}>1. Alimentación adecuada</Text>
        <Text style={styles.consejo}>2. Ejercicio diario</Text>
      </View>

      <View style={styles.section}>
        <Image source={require("../assets/img2.png")} style={styles.icon} />
        <Text style={styles.sectionTitle}>Consejos para Gatos</Text>
        <Text style={styles.consejo}>1. Comida de calidad</Text>
        <Text style={styles.consejo}>2. Juegos y estimulación</Text>
      </View>

      <View style={styles.section}>
        <Image source={require("../assets/img6.png")} style={styles.icon} />
        <Text style={styles.sectionTitle}>Consejos para Aves</Text>
        <Text style={styles.consejo}>1. Jaula adecuada</Text>
        <Text style={styles.consejo}>2. Alimentación balanceada</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
  section: {
    marginBottom: 20,
  },
  icon: {
    width: 50,
    height: 50,
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  consejo: {
    fontSize: 16,
  },
});

export default ConsejosScreen;
