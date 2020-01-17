// //Em react para poder importar um determinado obojeto é necessario exportar uma classe.1
// import { StyleSheet } from "react-native";

// const styles = StyleSheet.create({
//     container: {
//       flex: 1, //flex: 1 faz com que ocupa todo o espaço da tela
//       backgroundColor: '#0066cc',
//       justifyContent:'center',//O justifycontent alinha todo o conteudo verticalmente 
//       alignItems: 'center'//o AlignItems alinha todo o conteudo horizontalmente
//     },
//     texto:{
//       color: '#fff',
//       fontSize: 40
//     },
//     slogan:{
//       color:'#000'
//     }
//   });

//   //Exportando uma classe 
//   export default styles;


import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#708090qs',
        justifyContent: 'center',
        alignItems: 'center'
    },

    texto1: {
        color: '#8B008B',
        fontSize: 40
    },
    slogan:{
        color: '#FFFF00',
        fontSize: 30
    }
});


export default styles;