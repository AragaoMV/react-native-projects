import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text } from "react-native";
import { carregaProtudores } from "../../../servicos/carregaDados";
import Produtor from "./Produtor";

export default function Produtores({ topo: Topo }) {

    const [titulo, setTitulo] = useState('');
    const [lista, setLista] = useState('');

    useEffect(() => {
        const retorno = carregaProtudores();
        setTitulo(retorno.titulo);
        setLista(retorno.lista);

    }, []);

    const TopoLista = () => {

        return <>
            <Topo />
            <Text style={estilos.titulo}>{titulo}</Text>
        </>
    }

    return <FlatList
        data={lista}
        renderItem={({ item }) => <Produtor {...item} />}
        keyExtractor={({ nome }) => nome}
        ListHeaderComponent={TopoLista}

    />

}
const estilos = StyleSheet.create({
    titulo: {
        fontSize: 20,
        lineHeight: 32,
        marginHorizontal: 16,
        marginTop: 16,
        fontWeight: 'bold',
        color: '#464646'
    },
})