import React from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import { Card, Icon } from "react-native-elements";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const animalesData = [
  {
    id: "1",
    nombre: "Max",
    especie: "Perro",
    imagen: require("../assets/img1.png"),
  },
  {
    id: "2",
    nombre: "Luna",
    especie: "Gato",
    imagen: require("../assets/img2.png"),
  },
  {
    id: "3",
    nombre: "Rocky",
    especie: "Perro",
    imagen: require("../assets/img3.png"),
  },
];

const AdopcionScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Animales en Adopción</Text>
      <FlatList
        data={animalesData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("DetallesAnimal", { animal: item })
            }
          >
            <Card containerStyle={styles.cardContainer}>
              <Card.Image source={item.imagen} style={styles.cardImage} />
              <View style={styles.cardContent}>
                <Text style={styles.cardName}>Nombre: {item.nombre}</Text>
                <Text style={styles.cardSpecies}>Especie: {item.especie}</Text>
              </View>
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
    backgroundColor: "#F5F5F5",
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
    backgroundColor: "white",
    elevation: 3,
  },
  cardImage: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  cardContent: {
    paddingVertical: 10,
  },
  cardName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  cardSpecies: {
    fontSize: 16,
  },
});

export default AdopcionScreen;
