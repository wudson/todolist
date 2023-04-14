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
    },
    tarefa:{
        flex: 9,
        color: '#D9D9D9',
        marginHorizontal: 10
    }
});