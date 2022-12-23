import React from "react";
import { ImageBackground, SafeAreaView, StyleSheet, View, } from "react-native";

import SorteiaNumero from "./Componentes/Soteio";
import Topo from "./Componentes/Topo";

import background from '../assets/Background.jpg'

export default function Home() {
    return <SafeAreaView style={styles.fundo}>
        <ImageBackground source={background} resizeMode="cover" style={styles.imagem}>
            <View style={styles.card}>
                <Topo />
                <SorteiaNumero />
            </View>

        </ImageBackground>
    </SafeAreaView>
}
const styles = StyleSheet.create({
    fundo: {
        flex: 1,
    },
    imagem: {
        flex: 1,
        justifyContent: "center"
    },
    card:{
        flex: 1,
        backgroundColor: "#ffff",
        margin: 20,
        borderRadius: 5
        
    }

})