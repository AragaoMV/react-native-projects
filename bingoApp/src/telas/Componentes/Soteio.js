import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";


export default function SorteiaNumero() {

    const geraSorteio = () => {
        var numeroAleatorio = Math.random();
        numeroAleatorio = Math.floor(numeroAleatorio * 99)
        alert(numeroAleatorio);

    }

    return <View>
        <Text style={styles.numero}>0</Text>
        <TouchableOpacity
            style={styles.botao}
            onPress={geraSorteio}>
            <Text style={styles.btnText}>Sortear</Text>
        </TouchableOpacity>
    </View>
}
const styles = StyleSheet.create({

    numero: {
        color: "#FFFFFF",
        textAlign: "center",
        fontSize: "100",
    },
    botao: {
        backgroundColor: "#14fa55",
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
})
