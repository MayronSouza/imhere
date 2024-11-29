import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import { styles } from './style'

export function Home () {
  function handleParticipantAdd() {
    console.log('Fui clicado para adicionar um participante!')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>
      <Text style={styles.eventDate}>Quinta, 29 de Novembro de 2024.</Text>
      <TextInput
        style={styles.input}
        placeholder='Nome do participante'
        placeholderTextColor='#6b6b6b'
      />
      <TouchableOpacity
        style={styles.button}
        onPress={handleParticipantAdd}
      >
        <Text style={styles.buttonText}>
          +
        </Text>
      </TouchableOpacity>
    </View>
  )
}