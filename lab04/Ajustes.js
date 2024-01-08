import React from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

export default function Ajustes() {
  const [notificaciones, setNotificaciones] = React.useState(false);

  const handleGuardarAjustes = () => {
    alert(
      `Ajustes guardados: Notificaciones - ${
        notificaciones ? "Activadas" : "Desactivadas"
      }`
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Ajustes</Text>
      <View style={styles.toggleContainer}>
        <Text>Notificaciones</Text>
        <TextInput
          style={styles.toggleInput}
          placeholder="Activar/Desactivar"
          onChangeText={(text) => setNotificaciones(text === "Activar")}
        />
      </View>
      <Button title="Guardar Ajustes" onPress={handleGuardarAjustes} />
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
  toggleContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  toggleInput: {
    width: 100,
    fontSize: 18,
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    padding: 10,
    marginLeft: 20,
  },
});
