import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    cardTarefa:{
        flexDirection: 'row',
        backgroundColor: '#262626',
        alignItems: 'center',
        height: 60,
        borderRadius: 10,
        marginBottom: 5,
        paddingHorizontal: 10
    },
    desmarcado:{
        width: 25,
        height: 25,
        borderRadius: 100,
        borderColor: '#4184ad',
        borderWidth: 3
    },
    marcado:{
        width: 25,
        height: 25,
        borderRadius: 100,
        borderColor: '#4e4f8a',
        backgroundColor: '#4e4f8a'
    },
    remover:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    tarefa:{
        flex: 9,
        color: '#D9D9D9',
        marginHorizontal: 10
    },
    tarefaConcluida:{
        flex: 9,
        color: '#808080',
        marginHorizontal: 10,
        textDecorationLine: 'line-through'
    }
});