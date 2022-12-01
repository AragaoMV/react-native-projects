import React from "react";
import { StyleSheet, Text } from "react-native";

export default function Descricao({ texto }) {
    return <>
        <Text style={estilos.texto}>{texto}</Text>
    </>
}

const estilos = StyleSheet.create({
    texto: {
        width: "100%",
        position: "absolute",
        textAlign: "justify",
        fontSize: 10,
        lineHeight: 20,
        padding: 20,
    }
})