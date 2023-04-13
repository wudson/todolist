import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderColor: '#333333',
        borderBottomWidth: 1,
        paddingBottom: 20,
        paddingTop: 60,
        marginBottom: 20
    },
    bottomContainer: {
        flex: 6,
        backgroundColor: '#1A1A1A',
        paddingHorizontal: 25
    },
    topContainer: {
        flex: 2,
        flexDirection: 'row',
        backgroundColor: '#0D0D0D',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonContainer: {
        position: 'absolute',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: "row",
        height: '50%'
    },
    input: {
        flex: 1,
        backgroundColor: '#262626',
        borderRadius: 5,
        height: 56,
        marginRight: 5,
        padding: 15,
        color: '#fff'
    },
    buttonAdd: {
        height: 56,
        width: 56,
        backgroundColor: '#1e6f9f',
        borderRadius: 5,
        justifyContent: 'center'
    },
    linhaInput: {
        width: '90%',
        flex: 1,
        flexDirection: 'row',
        marginHorizontal: 25
    },
    textButtonAdd: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 26
    },
    tinyLogo: {
        width: 50,
        height: 50,
    },
    titulo:{
        color: '#4ea8de',
        fontSize: 60,
        fontWeight: 'bold',
        marginLeft: 15
    },
    coluna1:{
        flex: 1,
        flexDirection: "row"
    },
    coluna2:{
        flex: 1,
        flexDirection: "row",
        justifyContent: 'flex-end',
    },
    textoColuna1:{
        marginRight: 10,
        color: '#4184ad'
    },
    textoColuna2:{
        marginRight: 10,
        color: '#4e4f8a'
    },
    contador: {
        backgroundColor: '#333333',
        color: '#D9D9D9',
        borderRadius: 20,
        paddingHorizontal: 8
    },
    tarefa:{
        flex: 9,
        color: '#D9D9D9',
        marginHorizontal: 10
    },
    listaVazia:{
        flex: 1,
        alignItems: 'center',
        marginTop: 40
    },
    listaVazia1:{
        color: '#808080',
        fontWeight: 'bold'
    },
    listaVazia2:{
        color: '#808080'
    },
    cardTarefa:{
        flexDirection: 'row',
        backgroundColor: '#262626',
        alignItems: 'center',
        height: 60,
        borderRadius: 10,
        marginBottom: 5,
        paddingHorizontal: 10
    },
    radio:{
        width: 25,
        height: 25,
        borderRadius: 100,
        borderColor: '#4184ad',
        borderWidth: 3
    },
    remover:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});