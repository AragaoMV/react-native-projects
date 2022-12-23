import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const numeroSorteio = [];

export default function SorteiaNumero() {

    const [ultimaBola, setUltimaBola] = useState()


    function Bingo() {

        let bola = Math.floor(Math.random() * (75 - 1 + 1)) + 1;
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
            <Text style={styles.texto}> Ultimo número sorteado:</Text>
            <Text style={styles.numero}>{ultimaBola}</Text>

            <View style={styles.botoes}>
                <TouchableOpacity
                    style={styles.botaoSorteio}
                    onPress={Bingo}
                >
                    <Text style={styles.btnText}>Sortear</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.botaoResultado}
                    onPress={() => { alert(filtered) }}>
                    <Text style={styles.btnText}>Resultado</Text>
                </TouchableOpacity>
            </View>


        </View>
    )
}
const styles = StyleSheet.create({
    texto: {
        color: "#23a954",
        textAlign: "left",
        fontSize: "20",
        fontWeight: "bold",
        padding: 15

    },
    botaoSorteio: {
        backgroundColor: "#ff0000",
        height: 60,
        width: 130,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        marginRight: 5
    },
    botaoResultado: {
        backgroundColor: "#23a954",
        height: 60,
        width: 130,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        marginLeft: 5
    },
    btnText: {
        color: '#fff',
        fontSize: 20,
        textAlign: "center"
    },
    container: {
        flex: 1,
        backgroundColor: "#ffffff",
        margin: 20,
    },
    botoes: {
        flex: 1,
        flexDirection: "row",
        alignContent: "space-between",
        margin: 10,
        padding: 10,
    },
    numero: {
        color: "#ff0000",
        fontSize: 180,
        textAlign: "center",
    }
})
