import React from "react";
import { SafeAreaView, StatusBar } from "react-native";

import Jogadas from "./componentes/Jogadas";
import Topo from "./componentes/Topo";


export default function Ataque({topo,jogadas}){
    return <SafeAreaView>
        <StatusBar/>
        <Topo {...topo}/>
        <Jogadas {...jogadas}/>
    </SafeAreaView>
};