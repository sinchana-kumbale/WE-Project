import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import { TextInput as Input } from 'react-native-paper'
import { theme } from '../core/theme'

export default function TextInput({ errorText, description, ...props }) {
  return (
    <View style={styles.container}>
      <Input
        style={styles.input}
        selectionColor='#ffb6c1'
        underlineColor="transparent"
        mode="outlined"
        outline = '#ffb6c1'
        {...props}
      />
      {description && !errorText ? (
        <Text style={styles.description}>{description}</Text>
      ) : null}
      {errorText ? <Text style={styles.error}>{errorText}</Text> : null}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginVertical: 12,
    //backgroundColor: '#ffb6c1'
    
  },
  input: {
    backgroundColor:'#FFFFFF',
    color: '#ffb6c1',
  },
  description: {
    fontSize: 13,
    color: '#ffb6c1',
    paddingTop: 8,
  },
  error: {
    fontSize: 13,
    color: theme.colors.error,
    paddingTop: 8,
  },
})
