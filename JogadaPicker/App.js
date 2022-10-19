import React, {Component} from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons'; 
//import Desafios from './src';

class App extends Component{
  constructor(props){
    super(props);
    this.state={
      listaJogada: [
        { id: '1',
          nomeJGD:'Nerdola',
          descJGD:'Formação- Trips Alfa Depende do alinhamento do corner. Press- Fly, 5 Jardas - Post, Cushion - Slant (Linha) Bravo Comeback (release para fora) (linha) Charlie  Fake Run, entrada pelo gap 4 e rota out Echo  Post (release para dentro) Delta  Fly (Linha) (release para fora)'
        },
        { id:'2',
          nomeJGD: 'Casa Própria',
          descJGD: 'Formação: Shotgun Alfa: 10 in (75%) (release para dentro) (linha) Bravo: Post  (release para dentro) (linha) Charlie - Fake Run, pocket Delta - Corner (110%) (release para fora) Echo - Block - Flat'
        },
        
        ]
    };
    this.definirJogada = this.definirJogada.bind(this);
    this.abrirJogada = this.abrirJogada.bind(this);
   
}

    definirJogada(){
        let numeroAleatorio = Math.floor(Math.random() * this.state.listaJogada.length);
  
        this.setState({
        listaJogada: ' " ' + this.state.listaJogada[numeroAleatorio] + '"',
        });      
      }

      abrirJogada(){
        alert(this.state.listaJogada.descJGD)
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
        
        
      <Text style={styles.nomeJGD}> {this.state.listaJogada.nomeJGD} </Text>

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