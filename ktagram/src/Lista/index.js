import React,{ Component } from "react";
import {View,Text,Image,TouchableOpacity, StyleSheet} from 'react-native';

class Lista extends Component{
    constructor(props){
        super(props);
        this.state={
            feed: this.props.data
        };
        this.carregaIcone= this.carregaIcone.bind(this)
        this.mostraLikes = this.mostraLikes.bind(this)
        this.like = this.like.bind(this)
    }

    like(){
        let feed = this.state.feed;
        if (feed.likeada === true){
            this.setState({
                feed:{
                    ...feed,
                    likeada: false,
                    likes: feed.likes -1
                }
            });
        }            else{
                this.setState({
                    feed:{
                        ...feed,
                        likeada: true,
                        likes: feed.likes + 1
                    }
                });
            }
        }
    
        carregaIcone(likeada){
            return likeada ? require('../img/likeada.png'): require('../img/like.png');
        }
    mostraLikes(likes){
        let feed = this.state.feed;
        if(feed.likes <= 0 ){
            return;
        }
        return(
            <Text
            style={styles.likes}
            >{feed.likes} {feed.likes > 1 ?'curtidas':'curtida'}</Text>
        );
    }

    render(){
        return(
            <View style={styles.areaFeed}>
                {/*Perfil do publicador*/}
                <View style={styles.viewPerfil}>
                <Image
                source={{uri:this.state.feed.imagemPerfil}}
                style={styles.fotoPerfil}
                /> 
                <Text style={styles.nomeUsuario}>{this.state.feed.nome}</Text>
                </View>
                {/*Perfil do publicador*/}
            <Image
            resizeMode="cover"
            style={styles.fotoPublicacao}
            source={{uri: this.state.feed.imagemPublicacao}}
            />
                {/*Publicação*/}
            {/*Descrição foto*/}
            <View style={styles.areaDesc}>
                <TouchableOpacity onPress={this.like}>
                    <Image
                    source={this.carregaIcone(this.state.feed.likeada)}
                    style={styles.iconeLike}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnSend}>
                    <Image
                    source={require('../img/send.png')}
                    style={styles.iconeLike}
                    />
                </TouchableOpacity>
            </View>

            {this.mostraLikes(this.state.feed.likes)}

            <View style={styles.legenda}>
                <Text style={styles.perfilLegenda}>{this.state.feed.nome}</Text>
                <Text style={styles.textoLegenda}> {this.state.feed.legenda}</Text>
            </View>
            {/*Descrição foto*/}
        </View>
        );
    }
}const styles = StyleSheet.create({
    areaFeed:{

    },
    viewPerfil:{
        flex: 1,
        flexDirection:'row',
        alignItems: 'center',
        padding: 8,
    },
    fotoPerfil:{
        height: 35,
        width: 35,
        borderRadius: 25
    },
    nomeUsuario:{
        textAlign:'left',
        fontSize:15,
        color:'#000000',
        marginLeft: 10
    },
    fotoPublicacao:{
        flex: 1,
        height:450,
        alignItems:'center',
    },
    legenda:{
        flex: 1,
        alignItems: 'center',
        flexDirection:'row',
    },
    perfilLegenda:{
        marginLeft: 7,
        fontWeight:'bold'
    },
    areaDesc:{
        flexDirection:'row',
        padding: 5,

    },
    iconeLike:{
        width:33,
        height:33,
    },
    btnSend:{
        marginLeft: 10
    },
    likes:{
        padding: 5,

    },   
});
export default Lista;