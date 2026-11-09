// app/catalogo.js (Pasos 2 y 3 de la sesión 2)
import { View, Text, StyleSheet } from "react-native";
import Boton from "../components/ui/Boton";
import Etiqueta from "../components/ui/Etiqueta";

export default function Catalogo() {
  return (
    <View style={styles.pantalla}>
      <Text style={styles.titulo}>Catálogo de componentes</Text>

      <Text style={styles.seccion}>Boton · valor por defecto y estados</Text>
      <Boton
        titulo="Sin variante (usa la de por defecto)"
        onPress={() => console.log("defecto")}
      />
      <Boton
        titulo="Deshabilitado"
        deshabilitado
        onPress={() => console.log("NO debe salir")}
      />
      <Boton
        titulo="Con estilo extra"
        estilo={{ marginTop: 8 }}
        onPress={() => console.log("extra")}
      />

      <Text style={styles.seccion}>Etiqueta</Text>
      <Etiqueta texto="Información" />
      <Etiqueta texto="Hecha" tipo="exito" />
      <Etiqueta texto="Pendiente" tipo="aviso" />
      <Etiqueta texto="Error" tipo="error" />
    </View>
  );
}

const styles = StyleSheet.create({
  pantalla: { flex: 1, padding: 16, gap: 12 },
  titulo: { fontSize: 22, fontWeight: "bold" },
  seccion: { fontSize: 16, color: "#666666", marginTop: 8 },
});
