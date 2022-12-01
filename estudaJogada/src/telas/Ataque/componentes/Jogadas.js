import React from "react";
import { StyleSheet, Text } from "react-native";

export default function Jogadas({ listaJogadas }) {
    return <>
        <Text style={estilos.jogadas}>{listaJogadas}</Text>
    </>
}

const estilos = StyleSheet.create({
    jogadas: {
        width: "100%",
        position: "absolute",
        textAlign: "justify",
        fontSize: 10,
        lineHeight: 20,
        padding: 20,
    }
})