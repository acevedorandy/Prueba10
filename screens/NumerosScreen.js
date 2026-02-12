import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";

export default function NumerosScreen() {
  const [n1, setN1] = useState("");
  const [n2, setN2] = useState("");
  const [n3, setN3] = useState("");
  const [resultado, setResultado] = useState(null);

  const calcular = () => {
    if (!n1 || !n2 || !n3) {
      Alert.alert("Error", "Por favor ingrese los 3 números");
      return;
    }

    const a = parseFloat(n1);
    const b = parseFloat(n2);
    const c = parseFloat(n3);

    const mayor = Math.max(a, b, c);
    const menor = Math.min(a, b, c);
    const promedio = ((a + b + c) / 3).toFixed(2);

    setResultado({ mayor, menor, promedio });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mayor, Menor y Promedio</Text>

      <TextInput
        placeholder="Número 1"
        placeholderTextColor="#999"
        keyboardType="numeric"
        style={styles.input}
        onChangeText={setN1}
      />

      <TextInput
        placeholder="Número 2"
        placeholderTextColor="#999"
        keyboardType="numeric"
        style={styles.input}
        onChangeText={setN2}
      />

      <TextInput
        placeholder="Número 3"
        placeholderTextColor="#999"
        keyboardType="numeric"
        style={styles.input}
        onChangeText={setN3}
      />

      <TouchableOpacity style={styles.button} onPress={calcular}>
        <Text style={styles.buttonText}>Calcular</Text>
      </TouchableOpacity>

      {resultado && (
        <View style={styles.resultBox}>
          <Text style={styles.resultText}>Mayor: {resultado.mayor}</Text>
          <Text style={styles.resultText}>Menor: {resultado.menor}</Text>
          <Text style={styles.resultText}>
            Promedio: {resultado.promedio}
          </Text>
        </View>
      )}
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
    marginBottom: 15,
  },
  button: {
    backgroundColor: "#00BFFF",
    padding: 12,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 16,
  },
  resultBox: {
    marginTop: 25,
    padding: 15,
    backgroundColor: "#1E1E1E",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#00BFFF",
  },
  resultText: {
    color: "#FFFFFF",
    fontSize: 16,
    marginBottom: 5,
  },
});
