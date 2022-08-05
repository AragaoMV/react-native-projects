import React, {Component} from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons'; 
//import Desafios from './src';

class App extends Component{
  constructor(props){
    super(props);
    this.state={
       textoJogada: " ",
    };
    this.definirJogada = this.definirJogada.bind(this);
    this.abrirJogada = this.abrirJogada.bind(this);
   
    this.listaJogada= [
      'c',
      'a',
      'b',
      'b'            
]
}

    definirJogada(){
        let numeroAleatorio = Math.floor(Math.random() * this.listaJogada.length);
  
        this.setState({
          textoJogada: ' " ' + this.listaJogada[numeroAleatorio] + '"',
        });      
      }

      abrirJogada(){
        alert(this.state.textoJogada)
       };
    

render(){
  return (
    <View style={styles.container}>
          <TouchableOpacity style={styles.botao}
                          onPress={this.definirJogada}>
          <View style={styles.btnArea}>
            <Text style={styles.btnTexto}>
              Definir Jogada
            </Text>
          </View>
        </TouchableOpacity>


    <View style={styles.abirJGD}>
    <TouchableOpacity onPress={this.abrirJogada}>
        <Feather name="clipboard" size={24} color="black" />
        </TouchableOpacity>
    </View>
        
        
      <Text style={styles.textoJogada}> {this.state.textoJogada} </Text>

    </View>
  );
 }
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#F5C4CF',
    alignItems: 'center',
    justifyContent: 'center'
  },
  abirJGD:{
    marginTop:30,
  },
  textoJogada:{
    fontSize: 20,
    margin: 30,
    fontStyle: 'italic',
    textAlign: 'center'
  },
  botao:{
    width: 230,
    height: 50,
    borderWidth: 2,
    borderColor: '#ffffff',
    borderRadius: 25,
  },
  btnArea:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnTexto:{
    fontSize: 18,
    fontWeight: 'bold',
    color:'#000'
  },
});

export default App;