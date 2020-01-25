import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    botao1:{
        marginTop: 20,
        paddingHorizontal: 60,
        paddingVertical: 10,
        backgroundColor: 'green',
        borderRadius: 100,
        borderWidth: 1,
        borderColor: '#FFF'
    },

    texto1:{
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold'
    }
})


export default estilos;