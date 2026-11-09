// app/index.js (añade los enlaces que falten)
import { View, StyleSheet } from "react-native";
import { Link } from "expo-router";

export default function Inicio() {
  return (
    <View style={styles.pantalla}>
      <Link href="/catalogo">Ver catálogo de componentes</Link>
      <Link href="/estados">Ejercicio 4 · Estados de un botón</Link>
      <Link href="/tareas">Ejercicio 5 · Lista de tareas</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  pantalla: { flex: 1, padding: 16, gap: 12 },
});
