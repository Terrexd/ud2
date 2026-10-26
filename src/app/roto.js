import { StyleSheet, Text, View } from "react-native";
import BotonRoto from "../components/ui/BotonRoto";

export default function Roto() {
  return (
    <View style={styles.pantalla}>
      <Text style={styles.titulo}>Pantalla con fallos</Text>
      <BotonRoto
        titulo="Guardar"
        variante="primario"
        onPress={() => console.log("Guardado")} // 5º Error - Faltaba la funcion flecha
      />
      <BotonRoto
        titulo="Aceptar" //  4º Error - Es titulo no texto
        variante="primario"
        onPress={() => console.log("Aceptado")}
      />
      <BotonRoto
        titulo="Borrar"
        variante="peligro" // 3º Error - estaba en mayuscula
        onPress={() => console.log("Borrado")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  pantalla: { flex: 1, padding: 16, gap: 12 },
  titulo: { fontSize: 22, fontWeight: "bold" },
});
