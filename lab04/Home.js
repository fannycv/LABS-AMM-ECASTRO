import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { View, Text, Image, StyleSheet, Button } from "react-native";

const DestinoViaje = ({ nombre, imagen }) => {
  const [reservado, setReservado] = useState(false);

  const handleReservar = () => {
    setReservado(true);
  };

  return (
    <View style={styles.destinoContainer}>
      <Image source={imagen} style={styles.imagenDestino} />
      <Text style={styles.nombreDestino}>{nombre}</Text>
      <StatusBar style="auto"></StatusBar>
      <Button
        title={reservado ? "Reservado" : "Reservar"}
        onPress={handleReservar}
        disabled={reservado}
      />
    </View>
  );
};

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Destinos de Viaje</Text>
      <View style={styles.gridContainer}>
        <DestinoViaje
          nombre="Playa Tropical"
          imagen={require("./assets/playa.png")}
        />
        <DestinoViaje
          nombre="Montañas Verdes"
          imagen={require("./assets/montaña.png")}
        />
        <DestinoViaje
          nombre="Ciudad Histórica"
          imagen={require("./assets/playa.png")}
        />
        <DestinoViaje
          nombre="Desierto Exótico"
          imagen={require("./assets/playa.png")}
        />
        <DestinoViaje
          nombre="Isla Paradisíaca"
          imagen={require("./assets/playa.png")}
        />
        <DestinoViaje
          nombre="Bosque Encantado"
          imagen={require("./assets/playa.png")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  destinoContainer: {
    width: "48%",
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    alignItems: "center",
  },
  imagenDestino: {
    width: 150,
    height: 100,
    marginBottom: 10,
  },
  nombreDestino: {
    fontSize: 16,
    marginBottom: 10,
  },
});
