import { View, Text, TextInput, TouchableOpacity, Image, FlatList, Button } from "react-native";
import { styles } from "./styles";
import React, { useState } from "react";

export function Home() {

  const [tarefas, setTarefas] = useState<string[]>([]);
  const [tarefa, setTarefa] = useState('');

  function addTarefa() {
    setTarefas(prev => [...prev, tarefa])
  }

  function removeTarefa(item: string) {
    setTarefas(prev => prev.filter(tarefa => tarefa !== item))
    console.log(tarefas);
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
          renderItem={({ item }) => 
          <View style={styles.cardTarefa}>
            <View style={{flex: 1}}>
          <Text style={styles.radio}></Text>
          </View>
          <Text style={styles.tarefa}>{item}</Text>
          <TouchableOpacity 
          style={styles.remover} 
          onPress={() => removeTarefa(item)}>
            <Text>
              🗑
            </Text>
          </TouchableOpacity>
          </View>
        }
          keyExtractor={item => item}
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
            onChangeText={setTarefa} />
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