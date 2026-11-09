// components/ui/Boton.js (Paso 2 de la sesión 2)
import { Pressable, Text, StyleSheet } from "react-native";

export default function Boton({
  titulo,
  onPress,
  variante = "primario",
  deshabilitado = false,
  estilo,
}) {
  return (
    <Pressable
      style={[
        styles.base,
        estilosVariante[variante],
        deshabilitado && styles.deshabilitado,
        estilo,
      ]}
      onPress={onPress}
      disabled={deshabilitado}
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
  deshabilitado: { opacity: 0.4 },
  texto: { color: "#FFFFFF", fontWeight: "bold", fontSize: 16 },
});

const estilosVariante = {
  primario: styles.primario,
  secundario: styles.secundario,
  peligro: styles.peligro,
};
