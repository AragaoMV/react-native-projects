import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export default function Item({ item: { nomeJogada, imagem } }) {

    return <View>
        <Image source={imagem} />
        <Text>{nomeJogada}</Text>
    </View>
}

const estilos = StyleSheet.create({
   
})