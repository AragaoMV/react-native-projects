import React from "react";
import { FlatList, StyleSheet, View } from "react-native";

import Jogadas from "./componentes/Jogadas";
import Topo from "./componentes/Topo";
import Item from "./componentes/item";


export default function Ataque({ topo, jogadas }) {
    return <FlatList
            data={jogadas.lista}
            renderItem={Item}
            keyExtractor={({ nomeJogada }) => nomeJogada}
            ListHeaderComponent={() => {
                return <>
                    <Topo {...topo} />
                    <View>
                        <Jogadas {...jogadas} />
                    </View>
                </>
            }}
        />

};

const estilos = StyleSheet.create({
    titulo: {
        width: "100%",
        position: "absolute",
        textAlign: "justify",
        fontSize: 10,
        lineHeight: 20,
        padding: 20,
    }
})