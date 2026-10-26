// components/ui/Boton.js (versión con variantes, Paso 2 de la sesión)
import { Pressable, StyleSheet, Text } from "react-native";

export default function Boton({ titulo, onPress, variante, tamano }) {
  return (
    <Pressable
      style={[styles.base, tam[tamano], estilosVariante[variante]]}
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
  // B4
  exito: { color: "#FFFFFF", backgroundColor: "#4e5e54" },
  aviso: { color: "#FFFFFF", backgroundColor: "#A66300" },
  contorno: {
    backgroundColor: "transparent",
    borderWidth: 2,
    borderColor: "#2E5597",
    color: "#2E5597",
  },
  pequeno: {
    paddingTop: "6px",
    paddingBottom: "6px",
    paddingLeft: "12px",
    paddingRight: "12px",
    fontSize: 13,
  },
  grande: {
    paddingTop: "18px",
    paddingBottom: "18px",
    paddingLeft: "28px",
    paddingRight: "28px",
    fontSize: 20,
  },
});

const estilosVariante = {
  primario: styles.primario,
  secundario: styles.secundario,
  peligro: styles.peligro,
  exito: styles.exito,
  aviso: styles.aviso,
  contorno: styles.contorno,
};

const tam = {
  pequeno: styles.pequeno,
  grande: styles.grande,
};
