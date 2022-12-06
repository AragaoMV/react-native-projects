import React from "react";
import { FlatList, SafeAreaView, StatusBar } from "react-native";


import Jogadas from "./componentes/Jogadas";
import Topo from "./componentes/Topo";
import Item from "../Defesa/componentes/item";

export default function Defesa({ topo, jogadas }) {
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