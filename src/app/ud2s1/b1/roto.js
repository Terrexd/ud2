// app/roto.js · EJERCICIO 5 · Esta pantalla también tiene fallos
import { StyleSheet, Text, View } from "react-native";
import BotonRoto from "../../../components/ui/BotonRoto";

export default function Roto() {
  return (
    <View style={styles.pantalla}>
      <Text style={styles.titulo}>Pantalla con fallos</Text>

      <BotonRoto
        titulo="Guardar"
        variante="primario"
        onPress={console.log("Guardado")}
      />
      <BotonRoto
        texto="Aceptar"
        variante="primario"
        onPress={() => console.log("Aceptado")}
      />
      <BotonRoto
        titulo="Borrar"
        variante="Peligro"
        onPress={() => console.log("Borrado")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  pantalla: { flex: 1, padding: 16, gap: 12 },
  titulo: { fontSize: 22, fontWeight: "bold" },
});
