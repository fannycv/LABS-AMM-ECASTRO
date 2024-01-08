import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

export default function Reservas() {
  const [nombre, setNombre] = useState("");
  const [fecha, setFecha] = useState("");
  const [ubicacion, setUbicacion] = useState("");
  const [mensaje, setMensaje] = useState(""); // Estado para el mensaje con emoji

  const handleReservar = () => {
    // Aquí puedes agregar la lógica para guardar la reserva junto con el mensaje.
    alert(`Gracias por reservar, ${nombre}! Mensaje: ${mensaje}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Reservar Viaje</Text>
      <TextInput
        style={styles.input}
        placeholder="Nombre"
        onChangeText={(text) => setNombre(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Fecha"
        onChangeText={(text) => setFecha(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Ubicación"
        onChangeText={(text) => setUbicacion(text)}
      />
      {/* TextInput para el mensaje con emoji */}
      <TextInput
        style={styles.input}
        placeholder="Mensaje con emoji de pizza 🍕"
        onChangeText={(text) => setMensaje(text)}
      />
      <Button title="Reservar" onPress={handleReservar} />
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
    marginBottom: 10,
  },
  input: {
    width: 300,
    fontSize: 18,
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    padding: 10,
    marginBottom: 20,
  },
});
