import React, {Component} from 'react'
import { StyleSheet, Text, View, FlatList, ActivityIndicator } from 'react-native';
import api from './src/services/api';
import Filmes from './src/Filmes';

class App extends Component {

constructor(props){
  super(props);
  this.state = {
    filmes:[],
    loading: true
  }
}

  async componentDidMount(){
    const response = await api.get('r-api/?api=filmes')
    this.setState({
      filmes: response.data,
      loading: false
    })
  }

  render(){
    if(this.state.loading){
	{/*Tela de login*/}
      return(
        <View style={{alignItems: 'center',
                      justifyContent:'center',
                      flex:1,}}>
          <ActivityIndicator color="#f5d5cf" size={40}
          />
        </View>
	{/*Tela de login*/}
      );
    }else{
     return (
      <View style={styles.container}>
 	{/*Lista de Filmes*/}
        <FlatList style={styles.lista}
           data={this.state.filmes}
           keyExtractor={item => item.id.toString() }
           renderItem={ ({item}) => <Filmes data={item} /> }
           />
	{/*Lista de Filmes*/}
 
     </View>
     );
    } 
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5d5cf',
    
  },
  lista:{
    marginTop:20
  },
});

export default App;