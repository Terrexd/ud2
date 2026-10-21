// app/index.js (añade los enlaces que falten)
import { View, StyleSheet } from "react-native";
import { Link } from "expo-router";

export default function Inicio() {
  return (
    <View style={styles.pantalla}>
      <Link href="/catalogo">Ver catálogo de componentes</Link>
      <Link href="/copiados">Ejercicio 3 · Botones copiados</Link>
      <Link href="/roto">Ejercicio 5 · Pantalla con fallos</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  pantalla: { flex: 1, padding: 16, gap: 12 },
});
