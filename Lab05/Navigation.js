import react from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialIcons";

import HomeScreen from "./Screens/HomeScreen";
import ConsejosScreen from "./Screens/ConsejosScreen";
import AdopcionScreen from "./Screens/AdopcionScreen";
import PerfilScreen from "./Screens/PerfilScreen";
import DetallesRefugioScreen from "./Screens/DetallesRefugioScreen";
import RefugiosScreen from "./Screens/RefugiosScreen";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

const HomeStackNavigator = createNativeStackNavigator();

function MyStack() {
  return (
    <HomeStackNavigator.Navigator initialRouteName="HomeScreen">
      <HomeStackNavigator.Screen name="HomeScreen" component={HomeScreen} />
      <HomeStackNavigator.Screen name="Consejos" component={ConsejosScreen} />
      <HomeStackNavigator.Screen name="Refugios" component={RefugiosScreen} />
    </HomeStackNavigator.Navigator>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{ tabBarActiveTintColor: "skyblue" }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: "Inicio",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
          tabBarBadge: 3,
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Adopcion"
        component={AdopcionScreen}
        options={{
          tabBarLabel: "Adopcion",
          tabBarIcon: ({ color, size }) => (
            <Icon name="pets" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Refugios"
        component={MyStack}
        options={{
          tabBarLabel: "Refugios",
          tabBarIcon: ({ color, size }) => (
            <Icon name="house" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="DetallesRefugio"
        component={DetallesRefugioScreen}
        options={{
          tabBarLabel: "Detalles",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="details" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Consejos"
        component={MyStack}
        options={{
          tabBarLabel: "Consejos",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="book-multiple"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Perfil"
        component={PerfilScreen}
        options={{
          tabBarLabel: "Perfil",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
