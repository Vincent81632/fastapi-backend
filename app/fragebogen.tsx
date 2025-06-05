import React, { useState } from 'react'
import { Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'

const Fragebogen = () => {
  const [auswahl, setAuswahl] = useState<string | null>(null)
  const [number, setNumber] = useState('')

  const ziele = [
    'Abnehmen',
    'Muskelaufbau',
    'Gesünder leben',
    'Bessere Leistungen im Sport',
    'Mehr Energie im Alltag',
  ]

  const handlePress = (ziel: string) => {
    setAuswahl(prev => (prev === ziel ? null : ziel))
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Fragebogen</Text>

        <Text style={styles.question}>1. Was ist dein Ziel?</Text>

        {ziele.map((ziel) => (
          <Pressable
            key={ziel}
            onPress={() => handlePress(ziel)}
            style={[
              styles.button,
              auswahl === ziel && styles.buttonAusgewählt,
            ]}
          >
            <Text style={styles.buttonText}>{ziel}</Text>
          </Pressable>
        ))}

        <Text style={styles.question}>2. Wie alt bist du?</Text>

        <TextInput
          value={number}
          onChangeText={(text) => {
            const onlyNums = text.replace(/[^0-9]/g, '')
            setNumber(onlyNums)
          }}
          keyboardType="numeric"
          style={styles.input}
        />
        
      </View>
    </ScrollView>
  )
}

export default Fragebogen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 50,
  },
  title: {
    marginBottom: 20,
    fontSize: 24,
    fontWeight: 'bold',
  },
  question: {
    marginTop: 30,
    marginBottom: 10,
    fontSize: 18,
  },
  button: {
    width: '80%',
    marginVertical: 10,
    backgroundColor: 'lightgray',
    borderRadius: 100,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonAusgewählt: {
    backgroundColor: '#ADD8E6',
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
  },
  input: {
    width: '80%',
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginTop: 10,
  },
})
