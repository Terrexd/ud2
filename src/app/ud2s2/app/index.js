// app/index.js (añade los enlaces que falten)
import { Link } from "expo-router";
import { StyleSheet, View } from "react-native";

export default function Inicio() {
  return (
    <View style={styles.pantalla}>
      <Link href="/catalogo">Ver catálogo de componentes</Link>
      <Link href="/ud2s2/app/estados">Ejercicio 4 · Estados de un botón</Link>
      <Link href="/ud2s2/app/tareas">Ejercicio 5 · Lista de tareas</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  pantalla: { flex: 1, padding: 16, gap: 12 },
});
