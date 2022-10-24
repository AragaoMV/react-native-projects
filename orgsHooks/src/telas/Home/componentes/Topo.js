import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import logo from '../../../assets/logo.png';
import { carregaTopo, carregaProtudores } from '../../../servicos/carregaDados';

class Topo extends React.Component {

    state = {
        topo: {
            boasVindas: '',
            legenda: '',
        },
    }

    atualizaTopo() {

        const retorno = carregaTopo();
        this.setState({ topo: retorno });
    }

    componentDidMount() {
        this.atualizaTopo();
    }

    render() {
        return <View style={estilos.topo}>
            <Image source={logo} style={estilos.imagem} />
            <Text style={estilos.titulo} >{this.state.topo.boasVindas}</Text>
            <Text style={estilos.subtitulo}>{this.state.topo.legenda}</Text>
        </View>
    }

}

const estilos = StyleSheet.create({
    topo: {
        backgroundColor: "#f6f6f6",
        padding: 16,
    },
    imagem: {
        width: 70,
        height: 28,
    },
    titulo: {
        marginTop: 24,
        fontSize: 26,
        lineHeight: 42,
        fontWeight: "bold",
    },
    subtitulo: {
        fontSize: 16,
        lineHeight: 26,
    },

});
export default Topo;