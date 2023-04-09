import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    bottomContainer: {
        flex: 1,
        backgroundColor: '#1A1A1A'
    },
    topContainer: {
        backgroundColor: '#0D0D0D',
        height: '25%'
    },
    buttonContainer: {
        position: 'absolute',
        width: '100%',
        height: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: "row"
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
    }
});