import React, {Component} from 'react'
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Keyboard } from 'react-native'
import api from '../services/api';

//convert?q=USD_BRL&compact=ultra&apiKey=ff6a6c34d4a8b5625d63

class Conversor extends Component{
    constructor(props){
        super(props);
        this.state={
            moedaA: props.moedaA,
            moedaB: props.moedaB,
            moedaB_valor: 0,
            valorConvertido: 0,
            teste: 0,
        };
        this.converter = this.converter.bind(this);
    }
    async converter(){
        let de_para = this.state.moedaA +'_'+ this.state.moedaB;
        const response = await api.get(`convert?q=${de_para}&compact=ultra&apiKey=ff6a6c34d4a8b5625d63`)
        let cotacao = response.data[de_para];

        let resultado =(cotacao *  parseFloat(this.state.moedaB_valor));

        this.setState({
            valorConvertido: resultado.toFixed(2),
            teste: de_para
        });
        Keyboard.dismiss();
    }   

    render(){
        const {moedaA, moedaB} = this.props;
        return(
            <View style={styles.container}>
                <Text style={styles.titulo}>{moedaA} para {moedaB}</Text>
                <TextInput
                placeholder='Valor a ser convertido'
                style={styles.areaInput}
                onChangeText={(moedaB_valor)=>this.setState({moedaB_valor})}
                keyboardType='numeric'
                />
                <TouchableOpacity style={styles.botao} onPress={this.converter}>
                    <Text style={styles.textoBotao}>Converter</Text>
                </TouchableOpacity>

                <Text style={styles.valorConvertido}>{(this.state.valorConvertido ===0) ? ' ' : this.state.valorConvertido}</Text>
                <Text>{this.state.moedaA}</Text>
                <Text>{this.state.moedaB}</Text>
                
            </View>
            
        );
    }
}
const styles = StyleSheet.create({
    container:{
      alignItems:'center',
      justifyContent: 'center',
    //  marginTop: 200
    },
    titulo:{
        fontSize: 30,
        fontWeight: 'bold',
        color:'#000',
    },
    areaInput:{
        width: 280,
        height: 45,
        backgroundColor: '#fff',
        textAlign: 'center',
        borderRadius: 5,
        margin: 10,
        fontSize: 20,
        color: '#000',
    },
    botao:{
        width: 150,
        height: 45,
        backgroundColor: '#20b2aa',
        borderRadius: 5,
        alignItems:'center',
        justifyContent: 'center',
        
    },
    textoBotao:{
        textAlign: 'center',
        color:'#ffffff',
        fontSize: 20,
        
    },
    valorConvertido:{
        marginTop: 10,
        fontSize: 30,

    },
 });

export default Conversor;