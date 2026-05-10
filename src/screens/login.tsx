import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Login({ setIsLoggedIn }: any) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const correctEmail = "admin@gmail.com";
    const correctPassword = "123456";

    if (email === correctEmail && password === correctPassword) {
      await AsyncStorage.setItem("userLoggedIn", "true");

      setIsLoggedIn(true);

      Alert.alert("Success", "Secure login successful!");
    } else {
      Alert.alert("Error", "Invalid email or password");

      setPassword("");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🏀 PBA Gilas Pilipinas</Text>

      <TextInput
        placeholder="Email"
        placeholderTextColor="#555"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        placeholder="Password"
        placeholderTextColor="#555"
        secureTextEntry
        style={styles.input}
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>LOGIN</Text>
      </TouchableOpacity>

      <Text style={styles.demo}>
        Demo Account:
        {"\n"}
        admin@gmail.com
        {"\n"}
        123456
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#0038A8",
  },

  title: {
    fontSize: 28,
    color: "#FCD116",
    textAlign: "center",
    marginBottom: 30,
    fontWeight: "bold",
  },

  input: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },

  button: {
    backgroundColor: "#CE1126",
    padding: 15,
    borderRadius: 10,
  },

  buttonText: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },

  demo: {
    marginTop: 20,
    color: "white",
    textAlign: "center",
  },
});