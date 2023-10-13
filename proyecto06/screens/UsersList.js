import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { database } from "../database/firebase";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import Usuarios from "./Usuarios";

const UsersList = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const collectionRef = collection(database, "usuarios");
    const q = query(collectionRef, orderBy("name", "desc"));

    const unsuscribe = onSnapshot(q, (querySnapshot) => {
      setUsers(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          email: doc.data().email,
          name: doc.data().name,
          phone: doc.data().phone,
          profileImage: doc.data().profileImage,
        }))
      );
    });
    return unsuscribe;
  }, []);
  return (
    <View>
      <Text style={styles.title}>Lista de Usuarios</Text>
      {users.map((usuario) => (
        <Usuarios key={usuario.id} {...usuario} />
      ))}
    </View>
  );
};

export default UsersList;
const styles = StyleSheet.create({
  title: {
    fontSize: 23,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
    color: "#6611ED",
  },
});
