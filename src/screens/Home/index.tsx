import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { styles } from "./styles";

export function Home() {
  return (
    <>
      <View style={styles.topContainer}>
        <View style={styles.container}>
      <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
      />
        <Text style={styles.titulo}>todo</Text>
        </View>
      </View>
      <View style={styles.bottomContainer}>
        <Text>Titulo</Text>
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.linhaInput}>
          <TextInput
            style={styles.input}
            placeholder="Adicione uma nova tarefa"
            placeholderTextColor='#333333' />
          <TouchableOpacity
            style={styles.buttonAdd}>
            <Text style={styles.textButtonAdd}>
              +
            </Text>
          </TouchableOpacity>
        </View>
      </View>

    </>
  );
}