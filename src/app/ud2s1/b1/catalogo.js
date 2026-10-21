// app/catalogo.js (Paso 2 de la sesión)
import { StyleSheet, Text, View } from "react-native";
import Boton from "../../../components/ui/Boton";

export default function Catalogo() {
  return (
    <View style={styles.pantalla}>
      <Text style={styles.titulo}>Catálogo de componentes</Text>

      <Text style={styles.seccion}>Boton · variantes</Text>
      <Boton
        titulo="Primario"
        variante="primario"
        onPress={() => console.log("primario")}
      />
      <Boton
        titulo="Secundario"
        variante="secundario"
        onPress={() => console.log("secundario")}
      />
      <Boton
        titulo="Peligro"
        variante="peligro"
        onPress={() => console.log("peligro")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  pantalla: { flex: 1, padding: 16, gap: 12 },
  titulo: { fontSize: 22, fontWeight: "bold" },
  seccion: { fontSize: 16, color: "#666666", marginTop: 8 },
});
