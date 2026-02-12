import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/foto.jpg")}
        style={styles.image}
      />

      <Text style={styles.title}>Randy Acevedo</Text>
      <Text style={styles.subtitle}>Desarrollador Mobile</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Tabla")}
      >
        <Text style={styles.buttonText}>Tabla de Multiplicar</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Numeros")}
      >
        <Text style={styles.buttonText}>Mayor, Menor y Promedio</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  image: {
    width: 160,
    height: 160,
    borderRadius: 80,
    marginBottom: 20,
    borderWidth: 3,
    borderColor: "#00BFFF",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  subtitle: {
    fontSize: 16,
    color: "#AAAAAA",
    marginBottom: 30,
  },
  button: {
    backgroundColor: "#00BFFF",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 25,
    marginBottom: 15,
    width: "80%",
    alignItems: "center",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});
