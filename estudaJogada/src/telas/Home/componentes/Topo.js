import React from "react";
import { StyleSheet, Text } from "react-native";

export default function Topo({titulo}) {
    return <>
        <Text style={estilos.titulo}>{titulo}</Text>
        </>
}

const estilos = StyleSheet.create({
    titulo:{
        width:"100%",
        position:"absolute",
        textAlign:"center",
        fontSize: 16,
        lineHeight:26,
        fontWeight: 'bold', 
        padding: 20,
    }
})