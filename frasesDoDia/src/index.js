import React, { Component } from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import Estilos from "./estilos/styles";


const botaoPressionado = () => {

}

export default class App extends Component {
    render() {
        return (
            <View style={Estilos.Principal}>
                <Image source={require('./img/logo.png')} />
                <TouchableOpacity style = {Estilos.botao}>
                    <Text style = {Estilos.textoBotao}>Nova Frase</Text>
                </TouchableOpacity>
            </View>

        )
    }
}