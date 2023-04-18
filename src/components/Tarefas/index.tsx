import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { Tarefas } from "../../screens/Home";

type Props = {
    tarefa: Tarefas;
    onRemove: () => void;
    checkTarefa: () => void;
}

export function Tarefa({ tarefa, onRemove, checkTarefa }: Props) {
    return (
        <View style={styles.cardTarefa}>
            <View style={{flex: 1}}>
          <TouchableOpacity onPress={checkTarefa} style={[tarefa.concluida ? styles.marcado : styles.desmarcado]}></TouchableOpacity>
          </View>
          <Text style={[tarefa.concluida ? styles.tarefaConcluida : styles.tarefa]}>{tarefa.descricao}</Text>
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