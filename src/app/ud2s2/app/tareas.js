// app/tareas.js · EJERCICIO 5 · Lista de tareas con etiquetas
import { View, Text, FlatList, StyleSheet } from "react-native";
import { TAREAS } from "../data/tareas";

export default function Tareas() {
  return (
    <View style={styles.pantalla}>
      <Text style={styles.titulo}>Tareas</Text>
      <FlatList
        data={TAREAS}
        keyExtractor={(t) => String(t.id)}
        renderItem={({ item }) => (
          <View style={styles.fila}>
            <Text style={styles.nombre}>{item.titulo}</Text>
            {/* Aquí irán las etiquetas */}
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  pantalla: { flex: 1, padding: 16, gap: 12 },
  titulo: { fontSize: 22, fontWeight: "bold" },
  fila: {
    padding: 12,
    gap: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#EEEEEE",
  },
  nombre: { fontSize: 16 },
  etiquetas: { flexDirection: "row", gap: 6 },
});
