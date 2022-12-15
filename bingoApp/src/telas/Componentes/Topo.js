import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Topo() {
    return <View style={styles.fundo}>
        <Text style={styles.texto}> Aplicativo de Bingo </Text>
    </View>
}
const styles = StyleSheet.create({
    fundo: {
        backgroundColor: "#e34040",
        height: 50
        
    },
    texto: {
        color: "#14fa55",
        fontSize: "20",
        lineHeight: "30",
        textAlign: "center"
    }
})