// app/estados.js · EJERCICIO 4 · Estados y estilo extra
import { View, Text, StyleSheet } from "react-native";
import Boton from "../components/ui/Boton";

export default function Estados() {
  return (
    <View style={styles.pantalla}>
      <Text style={styles.titulo}>Estados de un botón</Text>

      <Boton
        titulo="A · Enviar"
        deshabilitado
        onPress={() => console.log("A")}
      />
      <Boton
        titulo="B · Guardar borrador"
        variante="secundario"
        deshabilitado={false}
        onPress={() => console.log("B")}
      />
      <Boton
        titulo="C · Cancelar"
        variante="secundario"
        estilo={{ marginTop: 24 }}
        onPress={() => console.log("C")}
      />
      <Boton
        titulo="D · Borrar"
        variante="peligro"
        estilo={{ backgroundColor: "#000000" }}
        onPress={() => console.log("D")}
      />
      <Boton
        titulo="E · Pequeño"
        estilo={{ alignSelf: "flex-start" }}
        onPress={() => console.log("E")}
      />
      <Boton
        titulo="F · Aceptar"
        deshabilitado="false"
        onPress={() => console.log("F")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  pantalla: { flex: 1, padding: 16, gap: 12 },
  titulo: { fontSize: 22, fontWeight: "bold" },
});
