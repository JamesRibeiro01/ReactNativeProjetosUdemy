import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image } from "react-native";
import estilos from "./estilos/styles";


const gerarNovaFrase = ()=>{
    var numAleatorio = Math.random();
    numAleatorio = Math.floor(numAleatorio * 5);

    var arrayFrases = Array();
    arrayFrases[0] = 'Toss a coin to your witcher';
    arrayFrases[1] = 'Oh Valley of Plenty';
    arrayFrases[2] = 'At the edge of the world';
    arrayFrases[3] = 'Fight the migthy horde',
    arrayFrases[4] = 'That bashes and breaks you';

    var fraseEscolhida = arrayFrases[ numAleatorio ];

    alert(fraseEscolhida)
}

export default class App extends Component {
    render() {
        return (
            <View style={estilos.container}>
                <Image source={require('./img/logo.png')} />

                <TouchableOpacity onPress = {gerarNovaFrase} style = {estilos.botao1}>
                    <Text style = {estilos.texto1}>Clique aqui</Text>
                </TouchableOpacity>
            </View>
        )
    }
}