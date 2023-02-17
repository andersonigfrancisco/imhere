
import { Text, View, TextInput, TouchableOpacity, FlatList, Alert } from "react-native";

import { Participant } from '../../components/Participant';

import { styles } from "./style";

export function Home() {

  const partipants = ["Anderson", "Telmo", "Penda", "Gildo", "Ariane", "Luis", "Jonce"]

  function handleParticipantAdd() {

    if(partipants.includes("Anderson")){
      return  Alert.alert("Participante existe", "Já existe um participante na lista com esse nome.");
    }
    console.log("Você clicou no botão de Adicionar!");
  }

  function handleParticipantRemove(name: string) {
    Alert.alert("Remover", `Remover o participante ${name}?`, [
      {
        text: 'Sim',
        onPress: () => Alert.alert("Deletado!")
      },
      {
        text: 'Não',
        style: 'cancel'
      }
    ])
  }

  return (
    <View style={styles.container}>

      <Text style={styles.eventName}>
        Nome do evento
      </Text>

      <Text style={styles.eventDate}>
        Quinta, 16 de Fevereiro de 2023.
      </Text>

      <View style={styles.form}>

        <TextInput
          style={styles.input}

          placeholder="Nome do participante"
          placeholderTextColor="#6B6B6B"
        />

        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>

      </View>

      <FlatList

        data={partipants}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <Participant
            key={item}
            name={item}
            onRemove={() => handleParticipantRemove(`${item}`)}

          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Não foi adicionado nenhum participante ao evento!
          </Text>
        )}
      />

    </View>
  )
}