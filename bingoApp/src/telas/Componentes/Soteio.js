import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";


const numeroSorteio = [];

export default function SorteiaNumero() {

    const geraSorteio = () => {
        let bola = Math.floor(Math.random() * (99 - 1 + 1)) + 1;
        let existeBola = numeroSorteio.find(item => item === bola);
        if (existeBola) {
            geraSorteio(); // Tenta novamente
            return;
        }
        alert(bola);
        numeroSorteio.push(bola);
        console.log(numeroSorteio);
    }


    return <View>
        <Text style={styles.numero}> Numeros ja sorteados: </Text>
        {numeroSorteio.map(()=>{
            <Text style={styles.numero} >{numeroSorteio}</Text>
        })}
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
        fontSize: "20",
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
