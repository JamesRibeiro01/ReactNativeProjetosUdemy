import { React } from 'react';
import { Text, View, Button, AppRegistry } from 'react-native';


const gerarNumeroAleatorio = ()=>{
  var numero_aleatorio = Math.random();
  numero_aleatorio = Math.floor(numero_aleatorio * 10);
  alert(numero_aleatorio)
}


const App1 = ()=>{
  return(

    <View>
      <Text>Gerador de números randômicos</Text>
      <Button title = "Clique para gerar um número" onPress = {gerarNumeroAleatorio} />
    </View>

  )
}

AppRegistry.registerComponent('App1', ()=>App1)