import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { Icon } from "react-native-elements";

const DetallesRefugioScreen = ({ route }) => {
  const { refugio } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={require("../assets/img5.png")} style={styles.imagen} />
      <Text style={styles.nombre}>{refugio.nombre}</Text>
      <Text style={styles.ubicacion}>
        <Icon name="location-on" size={20} color="#0796DE" />{" "}
        {refugio.ubicacion}
      </Text>
      <Text style={styles.telefono}>
        <Icon name="phone" size={20} color="#0796DE" /> {refugio.telefono}
      </Text>
      <Text style={styles.correo}>
        <Icon name="email" size={20} color="#0796DE" /> {refugio.correo}
      </Text>
      <Text style={styles.sitioWeb}>
        <Icon name="public" size={20} color="#0796DE" />{" "}
        <Text style={styles.link}>{refugio.sitioWeb}</Text>
      </Text>
      <Text style={styles.horarioAtencion}>
        <Icon name="schedule" size={20} color="#0796DE" />{" "}
        {refugio.horarioAtencion}
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  imagen: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 20,
  },
  nombre: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  ubicacion: {
    fontSize: 16,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  telefono: {
    fontSize: 16,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  correo: {
    fontSize: 16,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  sitioWeb: {
    fontSize: 16,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  link: {
    color: "#0796DE",
    textDecorationLine: "underline",
  },
  horarioAtencion: {
    fontSize: 16,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
});

export default DetallesRefugioScreen;
