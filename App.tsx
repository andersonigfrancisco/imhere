import { Text, View, StyleSheet } from 'react-native'


export default function App() {

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>
      <Text style={styles.eventDate}>Quinta, 16 de Fevereiro de 2023</Text>
    </View>


  )
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#101116',
    padding: 24
  },
  eventName: {
    color: '#FDFCFE',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 48
  },
  eventDate: {
    color: '#6B6B6B',
    fontSize: 16,
  }

})