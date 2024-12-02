import { FlatList, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { useState } from 'react'
import { v4 as uuidV4 } from 'uuid'


import { styles } from './styles'
import { Participant } from '../../components/Participant'

type ParticipantProps = {
  id: string
  name: string
}

export function Home () {
  const [participants, setParticipants] = useState<ParticipantProps[]>([])
  const [participantName, setParticipanName] = useState('');

  function handleParticipantAdd() {
    setParticipants(prevState => [...prevState, {
      id: uuidV4(),
      name: participantName
    }])
    setParticipanName('')
  }

  function handleParticipantRemove(id: string) {
    setParticipants(prevState => prevState.filter(item => item.id !== id))
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>
      <Text style={styles.eventDate}>Quinta, 29 de Novembro de 2024.</Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder='Nome do participante'
          placeholderTextColor='#6b6b6b'
          onChangeText={setParticipanName}
          value={participantName}
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
      <FlatList
        data={participants}
        keyExtractor={item => item?.id.toString() || ''}
        renderItem={({ item }) => (
          item ? (
            <Participant
              key={item.id}
              name={item.name}
              onRemove={() => handleParticipantRemove(item.id)}
            />
          ) : null
        )}
        showsHorizontalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ninguém chegou no evento ainda? Adicione participantes a sua lista de presença.
          </Text>
        )}
      />
    </View>
  )
}