
import { Text, View } from "react-native";

import { styles } from "./style";

export function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>
        Nome do evento
      </Text>

      <Text style={styles.eventDate}>
        Quinta, 16 de Fevereiro de 2023.
      </Text>
    </View>
  )
}