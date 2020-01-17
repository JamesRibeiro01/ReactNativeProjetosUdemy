// //Importando os componentes do React/React-native
// import React, { Component } from "react";
// import {Text, View } from "react-native";
// import styles from "./styles/styles";

// export default class App extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text style={styles.texto}>Olá CanalGeekDev</Text>
//         <Text style={styles.slogan}>Seu canal de nerdologia</Text>
//       </View>
//     )
//   }
// }



import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from "./styles/styles";

export default class App extends Component {
  render() {
    return (

      <View style={styles.container}>
        <Text style={styles.texto1}>Olá CanalGeekDev</Text>
        <Text style={styles.slogan}>Seu canal de nerdologia</Text>
        <Text style={styles.slogan}>Seu canal de nerdologia</Text>
      </View>
    )
  }
}