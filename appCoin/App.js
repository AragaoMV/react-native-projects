import React, {Component} from 'react'
import { StyleSheet, Text, View } from 'react-native';
import Conversor from './src/Conversor';
import { Picker } from '@react-native-picker/picker';

class App extends Component {
    constructor(props){
      super(props);
      this.state={
       // moedasA: 0,
       // moedasB: 0,
      //  moedasListaA:[
       //   {key: 1, moeda:'Dolar', codigo:'USD'},
      //    {key: 2, moeda:'Euro', codigo:'EUR'},
       //   {key: 3, moeda:'Real', codigo:'BRL'},
      //  ],
      //  moedasListaB:[
       //   {key: 1, moeda:'Dolar', codigo:'USD'},
       //   {key: 2, moeda:'Euro', codigo:'EUR'},
      //    {key: 3, moeda:'Real', codigo:'BRL'},
      //  ],
      };
    };
  render(){

     // let moedasItemA =this.state.moedasListaA.map((v,k)=>{
     //   return<Picker.Item key={k} value={k} label={v.moeda}/>
    //  });
    //  let moedasItemB =this.state.moedasListaB.map((v,k)=>{
     //   return<Picker.Item key={k} value={k} label={v.moeda}/>
    //  });
    return (
    <View style={styles.container}>

      <View style={styles.conteudo}>

      <Text style={{fontSize: 30, textAlign:'center'}}>Selecione as Moedas</Text>

     {/* <View style={styles.pickers}> /*}

        {/* MOEDA A*/}

    {/*  <Picker
      style={{height:30, width:200}}
      selectedValue={this.state.moedasA}
      onValueChange={(itemValue, itemIndex)=> this.setState({moedasA: itemValue})}
      > 
        {moedasItemA}
      </Picker>

        {/* MOEDA B*/}

     {/* <Picker
      style={{height:30, width:200}}
      selectedValue={this.state.moedasB}
      onValueChange={(itemValue, itemIndex)=> this.setState({moedasB: itemValue})}
      > 
        {moedasItemB}
      </Picker>

      </View>
    */}
      <Conversor moedaA="USD" moedaB="BRL" />
        <Conversor moedaA="EUR" moedaB="BRL" />
      {/*Conversor moedaA={this.state.moedasListaA[this.state.moedasA].codigo} moedaB={this.state.moedasListaB[this.state.moedasB].codigo}*/}
      </View>
    </View>
  );
 }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5c6cd',
  },
  conteudo:{
    marginTop: 20
  },
  pickers:{
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    justifyContent:'center',
  }, 
});

export default App;