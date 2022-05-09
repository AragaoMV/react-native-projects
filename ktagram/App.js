import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from 'react-native';
import Lista from './src/Lista';


class App extends Component {
  constructor(props){
    super(props);
    this.state ={ 
      feed:[
        {id:'2', 
         nome:'Miyeon',
         imagemPerfil:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSldtq86c8wAEf0lV3CBLozLpCjcIdx9ppR6g&usqp=CAU',
         imagemPublicacao:'http://pm1.narvii.com/7584/352c05e4126ff30759ace5a9e80bb372d131c64cr1-1536-2048v2_uhq.jpg',
         legenda:'Dreaming about you',
         likeada: false, likes: 1},
        {id:'3', 
         nome:'Yuqi',
         imagemPerfil:'https://pbs.twimg.com/media/EVj-lIWXQAI9n2m?format=jpg&name=large',
         imagemPublicacao:'https://dbkpop.com/wp-content/uploads/cache/2022/03/GIDLE_Tomboy_Yuqi_4/2477228982.jpg',
         legenda:'I like my new hair',
         likeada: false, likes: 152362},
        {id:'4', 
         nome:'Winter',
         imagemPerfil:'https://i.pinimg.com/736x/af/1d/21/af1d21c6e40c1e538fd74be29e7f0801.jpg',
         imagemPublicacao:'https://kpopping.com/documents/d4/1/800/211014-aespa-Savage-at-M-Countdown-documents-24(1).jpeg',
         legenda:'Oh my god, dont you know Im a Savage',
         likeada: false, likes: 50230},
        {id:'5', 
         nome:'Jung-Kook',
         imagemPerfil:'https://studiosol-a.akamaihd.net/letras/215x215/fotos/f/8/e/c/f8ec54bf6a24e61d13a645ac06d9e605.jpg',
         imagemPublicacao:'https://uploads.spiritfanfiction.com/historias/capas/202008/imagine-jungkook-bts-te-odeio-hot-20235980-170820202051.jpg',
         legenda:'Love you all',
         likeada: false, likes: 0}, 
               

        ]
    }
  }

  render(){
    return (
      <View style={styles.container}>
        {/*Cabeçario app*/}
        <View style={styles.header}>
         <Image
          source={require('./src/img/logo.png')}
          style={styles.logo}
        />
        <TouchableOpacity>
        <Image
          source={require('./src/img/send.png')}
          style={styles.send}
        />
        </TouchableOpacity>  
      </View>
        {/*Cabeçario app*/}
      {/*Lista dos itens*/}
      <FlatList
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item)=>item.id}
      data={this.state.feed}
      renderItem={({item})=> <Lista data={item}/>}

      />
      {/*Lista dos itens*/}

      </View>
    );
  }  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5c6cd',
    
  },
  header:{
    marginTop: 20,
    backgroundColor:'#f5c6cd',
    flexDirection: 'row',
    height: 55,
    alignItems: 'center',
    justifyContent:'space-between',
    padding: 5,
    borderBottomWidth: 0.3,
    shadowColor:'#000',
    elevation: 1
  },
  logo:{
     alignContent: 'center'
  },
  send:{
    width: 23,
    height: 23,
  }
  
});
export default App;