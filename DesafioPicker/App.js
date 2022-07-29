import React, {Component} from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
//import Desafios from './src';

class App extends Component{
  constructor(props){
    super(props);
    this.state={
       textoDesafio: " ",
    };
    
    this.definirDesafio = this.definirDesafio.bind(this);

   

    this.listaDesafios= [
      'c',
      'a',
      'b',
      'b'            
]
}
    definirDesafio(){
        let numeroAleatorio = Math.floor(Math.random() * this.listaDesafios.length);
  
        this.setState({
          textoDesafio: ' " ' + this.listaDesafios[numeroAleatorio] + '"',
        });      
      }
    

render(){
  return (
    <View style={styles.container}>
          <TouchableOpacity style={styles.botao}
                          onPress={this.definirDesafio}>
          <View style={styles.btnArea}>
            <Text style={styles.btnTexto}>
              Definir Desafio
            </Text>
          </View>
        </TouchableOpacity>


      <Text style={styles.textoDesafio}> {this.state.textoDesafio} </Text>
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
  textoDesafio:{
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