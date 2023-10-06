import React from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Card, Icon } from "react-native-elements";

const refugiosData = [
  {
    id: "1",
    nombre: "Refugio Amigos Peludos",
    ubicacion: "N° 123 Calle Principal",
    telefono: "123-456-7890",
    correo: "info@refugioamigospeludos.com",
    sitioWeb: "https://www.refugioamigospeludos.com",
    horarioAtencion:
      "Lunes a Viernes: 9:00 AM - 5:00 PM, Sábado: 10:00 AM - 3:00 PM",
  },
  {
    id: "2",
    nombre: "Refugio Patitas Felices",
    ubicacion: "N° 456 Avenida Central",
    telefono: "456-789-1230",
    correo: "info@patitasfelices.com",
    sitioWeb: "https://www.patitasfelices.com",
    horarioAtencion:
      "Lunes a Viernes: 10:00 AM - 6:00 PM, Sábado: 10:00 AM - 4:00 PM",
  },
  {
    id: "3",
    nombre: "Refugio Hogar Animal",
    ubicacion: "N° 789 Calle Sandia",
    telefono: "789-012-3456",
    correo: "info@hogaranimal.com",
    sitioWeb: "https://www.hogaranimal.com",
    horarioAtencion:
      "Lunes a Viernes: 8:00 AM - 4:00 PM, Sábado: 9:00 AM - 1:00 PM",
  },
  {
    id: "4",
    nombre: "Refugio Cariño Canino",
    ubicacion: "N° 101 Calle Puno",
    telefono: "101-202-3030",
    correo: "info@cariñocanino.com",
    sitioWeb: "https://www.cariñocanino.com",
    horarioAtencion:
      "Lunes a Viernes: 9:30 AM - 5:30 PM, Sábado: 10:00 AM - 3:00 PM",
  },
  {
    id: "5",
    nombre: "Refugio Gatos Sin Hogar",
    ubicacion: "N° 202 Avenida Mariscal Castilla",
    telefono: "202-303-4040",
    correo: "info@gatossinhogar.com",
    sitioWeb: "https://www.gatossinhogar.com",
    horarioAtencion:
      "Lunes a Viernes: 10:30 AM - 6:30 PM, Sábado: 11:00 AM - 4:00 PM",
  },
];

const RefugiosScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Refugios y Adopción</Text>
      <FlatList
        data={refugiosData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("DetallesRefugio", { refugio: item })
            }
          >
            <Card containerStyle={styles.cardContainer}>
              <Text style={styles.cardTitle}>{item.nombre}</Text>
              <Text style={styles.cardSubtitle}>{item.ubicacion}</Text>
              <Icon name="arrow-forward" type="material" color="#517fa4" />
            </Card>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  cardContainer: {
    borderRadius: 10,
    marginBottom: 16,
    padding: 16,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  cardSubtitle: {
    fontSize: 16,
  },
});

export default RefugiosScreen;
