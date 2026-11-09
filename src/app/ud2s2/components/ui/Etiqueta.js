// components/ui/Etiqueta.js (Paso 3 de la sesión 2)
import { View, Text, StyleSheet } from "react-native";

export default function Etiqueta({ texto, tipo = "info" }) {
  return (
    <View style={[styles.base, estilosTipo[tipo]]}>
      <Text style={styles.texto}>{texto}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  base: {
    alignSelf: "flex-start",
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 999,
  },
  info: { backgroundColor: "#2E5597" },
  exito: { backgroundColor: "#2E8B57" },
  aviso: { backgroundColor: "#D4A017" },
  error: { backgroundColor: "#C0392B" },
  texto: { color: "#FFFFFF", fontSize: 12, fontWeight: "bold" },
});

const estilosTipo = {
  info: styles.info,
  exito: styles.exito,
  aviso: styles.aviso,
  error: styles.error,
};
