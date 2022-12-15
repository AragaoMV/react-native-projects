import React from "react";
import { SafeAreaView, StyleSheet,} from "react-native";

import SorteiaNumero from "./Componentes/Soteio";
import Topo from "./Componentes/Topo";

export default function Home() {
    return <SafeAreaView style={styles.fundo}>
        <Topo />
        <SorteiaNumero />
    </SafeAreaView>
}
const styles = StyleSheet.create({
    fundo: {
        flex: 1,
        backgroundColor: "#e34040"
    },
   
})