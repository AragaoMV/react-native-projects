import React, {useState, useRef} from 'react'
import api from './src/services/api';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, SafeAreaView, Keyboard } from 'react-native';


export default function App() {
  const[cep, setCep] = useState('');
  const[cepUser, setCepUser]= useState('');
  const inputRef = useRef(null);

  async function buscar(){
    if (cep.length !== 8){
      alert('Dgite um CEP válido!')
      setCep('');
      return;
    }
    try {
    const response = await api.get(`/${cep}/json`);
    console.log(response.data);
    setCepUser(response.data);
    Keyboard.dismiss();

    }catch(error){
      console.log('Error: '+ error);
    }

  }

  function limpar(){
    setCep('');
    inputRef.current.focus();
    setCepUser('')
  }

  return (
    <SafeAreaView style={styles.container}>
      {/*View Titulo e Imput */}
      <View style={{alignItems: 'center'}}>
        <Text style={styles.texto}>Digite o CEP desejado</Text>
        <TextInput
          style={styles.recebeCep}
          placeholder='Ex.: 0000000'
          value={cep}
          onChangeText={(texto)=> setCep(texto)}
          keyboardType='numeric'
          ref={inputRef}
        />
      </View>
       {/*View Titulo e Imput */}
      {/*Botões */}
      <View style={styles.areaBtn}>
        <TouchableOpacity 
        style={[styles.botao,{backgroundColor:'#0cb5c4'}]}
        onPress={buscar}
        >
          <Text style={styles.btnText}>Buscar</Text>
        </TouchableOpacity>

        <TouchableOpacity 
        style={[styles.botao,{backgroundColor:'#bbc6c7'}]}
        onPress={limpar}
        >
          <Text style={styles.btnText}>Limpar</Text>
        </TouchableOpacity>
      </View>
      {/*Botões */}
      {/*Resultado*/}
             
         <View style={styles.resultado}>
         <Text style={styles.itemResultado}>CEP: {cepUser.cep}</Text>
         <Text style={styles.itemResultado}>Logradouro: {cepUser.logradouro}</Text>
         <Text style={styles.itemResultado}>Bairro: {cepUser.bairro} </Text>
         <Text style={styles.itemResultado}>Cidade: {cepUser.localidade}</Text>
         <Text style={styles.itemResultado}>Estado: {cepUser.uf} </Text>
         <Text style={styles.itemResultado}>DDD: {cepUser.ddd} </Text>
     </View>
        
      {/*Resultado*/}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3c5cf',
  },
  recebeCep:{
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 5,
    width:'90%', 
    padding:10,
    fontSize: 18,
  },
  texto:{
    marginTop: 20,
    marginBottom: 15,
    fontSize: 25,
    fontWeight:'bold',
  },
  areaBtn:{
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 15,
    justifyContent: 'space-around',
  },
  botao:{
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    borderRadius:5,
  },
  btnText:{
    color: '#fff',
    fontSize: 22,
  },
  resultado:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemResultado:{
    fontSize:22,
  },
});
