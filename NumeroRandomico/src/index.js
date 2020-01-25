// import React, { Component } from "react";
// import { View, Button, Text } from "react-native";
// import folhaEstilos from "./estilos/styles";

// const numRandomico = ()=>{
//     var num = Math.random();
//     num = Math.floor(num * 10)

//     alert(num)
// }

// export default class App extends Component {
//     render() {
//         return (
//             <View style = {folhaEstilos.container}>
//                 <Text style = {folhaEstilos.texto1}>Olá mundo</Text>
//                 <Button title = "Gerar número randomico" 
//                         onPress = {numRandomico}/>
//             </View>
//         )
//     }
// }

import React, { Component } from "react";
import { View, Button, Text } from "react-native";

const numeroRandomico = ()=>{
    var numero = Math.random();
    numero = Math.floor(numero * 10)
    alert(numero)
}

export default class App extends Component{
    render(){
        return(
            <View>
                <Text>Número randomico</Text>
                <Button title = "titulo" onPress = {numeroRandomico}/>
            </View>
        )
    }
}