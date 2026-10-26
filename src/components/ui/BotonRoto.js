import { Pressable, StyleSheet, Text } from "react-native"; // 2º Error - No está importado el Text

export default function BotonRoto({ titulo, onPress, variante }) {
  return (
    <Pressable
      style={[styles.base, estilosVariante[variante]]} // 1º Error - No es estilosVariantes.variante
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
  peligro: { backgroundColor: "#C0392B" },
  texto: { color: "#FFFFFF", fontWeight: "bold", fontSize: 16 },
});

const estilosVariante = {
  primario: styles.primario,
  peligro: styles.peligro,
};
