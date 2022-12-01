import React from "react";
import { SafeAreaView, Text } from "react-native";

import Descricao from "./componentes/Descricao";
import Topo from "./componentes/Topo";

export default function Home ({topo, descricao}) {
    return <SafeAreaView>
        <Topo {...topo}/>
        <Descricao {...descricao}/>
    </SafeAreaView>
};