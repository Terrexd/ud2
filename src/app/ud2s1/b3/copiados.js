// app/copiados.js · EJERCICIO 3 · Cuatro botones copiados y pegados
import { View, Text, Pressable, StyleSheet } from "react-native";

export default function Copiados() {
  return (
    <View style={styles.pantalla}>
      <Text style={styles.titulo}>Ficha de contacto</Text>

      <Pressable
        style={{
          backgroundColor: "#2E5597",
          paddingVertical: 12,
          paddingHorizontal: 20,
          borderRadius: 8,
          alignItems: "center",
        }}
        onPress={() => console.log("guardar")}
      >
        <Text style={{ color: "#FFFFFF", fontWeight: "bold", fontSize: 16 }}>
          Guardar
        </Text>
      </Pressable>

      <Pressable
        style={{
          backgroundColor: "#2E5597",
          paddingVertical: 12,
          paddingHorizontal: 20,
          borderRadius: 8,
          alignItems: "center",
        }}
        onPress={() => console.log("enviar")}
      >
        <Text style={{ color: "#FFFFFF", fontWeight: "bold", fontSize: 16 }}>
          Enviar
        </Text>
      </Pressable>

      <Pressable
        style={{
          backgroundColor: "#6B7280",
          paddingVertical: 12,
          paddingHorizontal: 20,
          borderRadius: 8,
          alignItems: "center",
        }}
        onPress={() => console.log("cancelar")}
      >
        <Text style={{ color: "#FFFFFF", fontWeight: "bold", fontSize: 16 }}>
          Cancelar
        </Text>
      </Pressable>

      <Pressable
        style={{
          backgroundColor: "#C0392B",
          paddingVertical: 12,
          paddingHorizontal: 20,
          borderRadius: 8,
          alignItems: "center",
        }}
        onPress={() => console.log("borrar")}
      >
        <Text style={{ color: "#FFFFFF", fontWeight: "bold", fontSize: 16 }}>
          Borrar
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  pantalla: { flex: 1, padding: 16, gap: 12 },
  titulo: { fontSize: 22, fontWeight: "bold" },
});
