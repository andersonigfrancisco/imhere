import { View, Text, TouchableOpacity } from 'react-native'

import { styles } from './styles'

type  props = {

  name:string
}


export function Participant({name}:props) {

  function handleParticipantAdd(){
    console.log("Remover partipante")
  }

  return (

    <View style={styles.container}>

      <Text style={styles.name}>
        {name}
      </Text>

      <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
        <Text style={styles.buttonText}>
          -
        </Text>
      </TouchableOpacity>

    </View>
  )
}