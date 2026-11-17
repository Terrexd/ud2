import { StyleSheet, Text, View } from "react-native";

export default function Insignia({ numero, tipo = "info", maximo = 99 }) {
  return (
    <View>
      <Text></Text>
    </View>
  );
}

const style = StyleSheet.create({
  base: {
    alignSelf: "flex-start",
    minWidth: 24,
    paddingVertical: 2,
    paddingHorizontal: 6,
    color: "#2E5597",
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
