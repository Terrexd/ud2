// components/ui/Boton.js (versión con variantes, Paso 2 de la sesión)
import { Pressable, Text, StyleSheet } from "react-native";

export default function Boton({ titulo, onPress, variante }) {
  return (
    <Pressable
      style={[styles.base, estilosVariante[variante]]}
      onPress={onPress}
    >
      <Text style={styles.texto}>{titulo}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: "center",
  },
  primario: { backgroundColor: "#2E5597" },
  secundario: { backgroundColor: "#6B7280" },
  peligro: { backgroundColor: "#C0392B" },
  texto: { color: "#FFFFFF", fontWeight: "bold", fontSize: 16 },
});

const estilosVariante = {
  primario: styles.primario,
  secundario: styles.secundario,
  peligro: styles.peligro,
};
