import React,{Component} from 'react';
import {View,Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import { backgroundColor, shadowColor, shadowOffset } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

class Filmes extends Component{
    render(){
        const {nome,foto,sinopse}=this.props.data
        return(
            <View>
               <View style={styles.card}>
                <Text style={styles.titulo}> {nome} </Text>
                <Image
                source={{uri:foto}}
                style={styles.capa}
                />
            </View>

            <View style={styles.areaBotao}>
                <TouchableOpacity style={styles.botao} onPress={()=>alert(sinopse)}>
                    <Text style={styles.botaoTexto}> Leia Mais</Text>
                </TouchableOpacity>
            </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    card:{
        shadowColor:'#000',
        backgroundColor:'#fff',
        shadowOffset:{width:0,height:1},
        shadowOpacity: 0.8,
        margin: 15,
        shadowRadius: 5,
        borderRadius: 5,
        elevation: 3,
    },
    titulo:{

        fontSize: 18,
        padding: 15,
    },
    capa:{
        flex: 1,
        height: 200,
        alignItems: 'center',
        zIndex: 2
    },
    botao:{
        width:100,
        backgroundColor: '#09a6ff',
        opacity: 1,
        padding:8
    },
    botaoTexto:{
        textAlign:'center',
        color: '#fff'
    },
    areaBotao:{
        alignItems:'flex-end',
        marginTop: -40,
        zIndex: 9,
    },
});


export default Filmes;