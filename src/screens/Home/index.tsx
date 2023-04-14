import { View, Text, TextInput, TouchableOpacity, Image, FlatList, Button } from "react-native";
import { styles } from "./styles";
import React, { useState } from "react";
import { Tarefa } from "../../components/Tarefas";

export type Tarefas = {
  descricao: string;
  concluida: boolean;
  id: string;
}

export function Home() {

  const [tarefas, setTarefas] = useState<Tarefas[]>([]);
  const [tarefa, setTarefa] = useState('');

  function addTarefa() {
    const data = {
      id: String(new Date().getTime()),
      descricao: tarefa,
      concluida: false
    };

    setTarefas(prev => [...prev, data]);
    setTarefa('');

    console.log(tarefas)
  }

  function removeTarefa(item: string) {
    setTarefas(prev => prev.filter(tarefa => tarefa.id !== item))
  }

  return (
    <>
      <View style={styles.topContainer}>
        <Image
          style={styles.tinyLogo}
          source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
          }}
        />
        <Text style={styles.titulo}>todo</Text>
      </View>

      <View style={styles.bottomContainer}>
        <View style={styles.container}>
          <View style={styles.coluna1}>
            <Text style={styles.textoColuna1}>Criadas</Text>
            <Text style={styles.contador}>0</Text>
          </View>
          <View style={styles.coluna2}>
            <Text style={styles.textoColuna2}>Concluidas</Text>
            <Text style={styles.contador}>0</Text>
          </View>
        </View>

        <FlatList
          data={tarefas}
          renderItem={({ item }) => (
            <Tarefa
              tarefa={item}
              key={item.id}
              onRemove={() => removeTarefa(item.id)} />
          )}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={() =>
            <View style={styles.listaVazia}>
              <Image
                source={require('../../../assets/favicon.png')}
              />
              <Text style={styles.listaVazia1}>
                Você ainda não tem tarefas cadastradas
              </Text>
              <Text style={styles.listaVazia2}>
                Crie tarefas e organize seus itens a fazer
              </Text>
            </View>
          }
        />
      </View>

      <View style={styles.buttonContainer}>
        <View style={styles.linhaInput}>
          <TextInput
            style={styles.input}
            placeholder="Adicione uma nova tarefa"
            placeholderTextColor='#333333'
            onChangeText={setTarefa}
            value={tarefa} />
          <TouchableOpacity
            style={styles.buttonAdd}
            onPress={addTarefa}>
            <Text style={styles.textButtonAdd}>
              +
            </Text>
          </TouchableOpacity>
        </View>
      </View>

    </>
  );
}