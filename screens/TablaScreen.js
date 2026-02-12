import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from "react-native";

export default function TablaScreen() {
  const [numero, setNumero] = useState("");
  const [resultado, setResultado] = useState([]);

  const generarTabla = () => {
    let tabla = [];
    for (let i = 1; i <= 14; i++) {
      tabla.push(`${numero} x ${i} = ${numero * i}`);
    }
    setResultado(tabla);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tabla de Multiplicar</Text>

      <TextInput
        placeholder="Ingrese un número"
        placeholderTextColor="#999"
        keyboardType="numeric"
        style={styles.input}
        onChangeText={setNumero}
      />

      <TouchableOpacity style={styles.button} onPress={generarTabla}>
        <Text style={styles.buttonText}>Generar</Text>
      </TouchableOpacity>

      <ScrollView style={{ marginTop: 20 }}>
        {resultado.map((item, index) => (
          <Text key={index} style={styles.result}>
            {item}
          </Text>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#00BFFF",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#00BFFF",
    borderRadius: 10,
    padding: 10,
    color: "#FFFFFF",
  },
  button: {
    backgroundColor: "#00BFFF",
    padding: 12,
    borderRadius: 10,
    marginTop: 15,
    alignItems: "center",
  },
  buttonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
  },
  result: {
    color: "#FFFFFF",
    fontSize: 16,
    marginBottom: 5,
  },
});
