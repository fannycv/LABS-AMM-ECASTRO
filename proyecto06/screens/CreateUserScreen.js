import React, { useState } from "react";
import {
  View,
  Button,
  TextInput,
  ScrollView,
  StyleSheet,
  Text,
  Image,
} from "react-native";
import { database } from "../database/firebase";
import { collection, addDoc } from "firebase/firestore";
import { MaterialCommunityIcons } from "@expo/vector-icons"; // Importa MaterialCommunityIcons

const CreateUserScreen = (props) => {
  const [state, setState] = useState({
    name: "",
    email: "",
    phone: "",
    profileImage: "",
  });

  const saveNewUser = async () => {
    if (state.name === "") {
      alert("Por favor, ingrese un nombre");
    } else {
      await addDoc(collection(database, "usuarios"), state);
      props.navigation.navigate("UsersList");
    }
  };

  const handleChangeText = (name, value) => {
    setState({ ...state, [name]: value });
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.inputGroup}>
        <MaterialCommunityIcons name="account" size={24} color="pink" />
        <TextInput
          placeholder="Name User"
          onChangeText={(value) => handleChangeText("name", value)}
        />
      </View>
      <View style={styles.inputGroup}>
        <MaterialCommunityIcons name="email" size={24} color="pink" />
        <TextInput
          placeholder="Email User"
          onChangeText={(value) => handleChangeText("email", value)}
        />
      </View>
      <View style={styles.inputGroup}>
        <MaterialCommunityIcons name="phone" size={24} color="pink" />
        <TextInput
          placeholder="Phone User"
          onChangeText={(value) => handleChangeText("phone", value)}
        />
      </View>
      <View style={styles.inputGroup}>
        <MaterialCommunityIcons name="image" size={24} color="pink" />
        <TextInput
          placeholder="URL de la imagen de perfil"
          onChangeText={(value) => handleChangeText("profileImage", value)}
        />
      </View>
      {state.profileImage !== "" && (
        <Image
          source={{ uri: state.profileImage }}
          style={styles.profileImage}
        />
      )}
      <View>
        <Button title="Save user" onPress={() => saveNewUser()} color="pink" />
      </View>
    </ScrollView>
  );
};

export default CreateUserScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35,
  },
  inputGroup: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 30,
    marginLeft: 65,
  },
});
