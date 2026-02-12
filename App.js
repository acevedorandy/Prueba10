import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./screens/HomeScreen";
import TablaScreen from "./screens/TablaScreen";
import NumerosScreen from "./screens/NumerosScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Inicio" component={HomeScreen} />
        <Stack.Screen name="Tabla" component={TablaScreen} />
        <Stack.Screen name="Numeros" component={NumerosScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
