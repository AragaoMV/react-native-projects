import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const numeroSorteio = [];

export default function SorteiaNumero() {

    const [ultimaBola, setUltimaBola] = useState()


    function Bingo() {
        
        let bola = Math.floor(Math.random() * (99 - 1 + 1)) + 1;
        let existeBola = numeroSorteio.find(item => item === bola);
        if (existeBola) {
            Bingo(); // Tenta novamente
            return;
        }
        numeroSorteio.push(bola);
        setUltimaBola(bola);
    }

    const filtered = numeroSorteio.filter((item, index) => numeroSorteio.indexOf(item) === index);

    return (
        <View style={styles.container}>
            <Text style={styles.numero}> {ultimaBola} </Text>
            <TouchableOpacity
                style={styles.botaoSorteio}
                onPress={Bingo}
            >
                <Text style={styles.btnText}>Sortear</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.botaoResultado}
                onPress={() => { alert(filtered) }}>
                <Text style={styles.btnText}>Lista de Sorteados</Text>
            </TouchableOpacity>

        </View>
    )
}
const styles = StyleSheet.create({
    numero: {
        color: "#FFFFFF",
        textAlign: "left",
        fontSize: "20",
        padding: 15
    },
    botaoSorteio: {
        backgroundColor: "#14fa55",
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
        borderRadius: 5,
        marginHorizontal: 80
    },
    botaoResultado: {
        backgroundColor: "#ffbabe",
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
        borderRadius: 5,
        marginHorizontal: 80
    },
    btnText: {
        color: '#fff',
        fontSize: 20,
        textAlign: "center"
    },
    container: {
        flex: 1,
    }
})
