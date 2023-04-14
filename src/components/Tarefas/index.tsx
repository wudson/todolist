import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { Tarefas } from "../../screens/Home";

type Props = {
    tarefa: Tarefas;
    onRemove: () => void;
}

export function Tarefa({ tarefa, onRemove }: Props) {

function checkTarefa(){
    tarefa.concluida = true;
}

    return (
        <View style={styles.cardTarefa}>
            <View style={{flex: 1}}>
          <Text style={styles.radio} onPress={checkTarefa}></Text>
          </View>
          <Text style={styles.tarefa}>{tarefa.descricao}</Text>
          <TouchableOpacity 
          style={styles.remover} 
          onPress={onRemove}>
            <Text>
              🗑
            </Text>
          </TouchableOpacity>
          </View>
    )
}