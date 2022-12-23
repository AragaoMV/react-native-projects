import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Topo() {
    return <View>
        <Text style={styles.texto}> Bingo </Text>
    </View>
}
const styles = StyleSheet.create({
    texto: {
        marginTop: 5,
        color: "#23a954",
        fontSize: "72",
        textAlign: "center",
        fontWeight:"bold"
    }
})