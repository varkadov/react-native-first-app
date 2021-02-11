import React from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    padding: 10,
    alignItems: 'center'
  },
  title: {
    fontSize: 20,
    marginVertical: 10
  },
  inputContainer: {
    width: 300,
    maxWidth: '80%',
    alignItems: 'center',
    shadowColor: 'black',
    shadowOffset: { height: 2, width: 0 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    backgroundColor: 'white',
    elevation: 5,
    padding: 20,
    borderRadius: 10,
  },
  buttonsContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  }
});

export const StartGameScreen: React.FunctionComponent = () => {
  return (
    <View style={styles.root}>
      <Text style={styles.title}>Start a New Game!</Text>

      <View style={styles.inputContainer}>
        <Text>Select a Number</Text>
        <TextInput placeholder='Enter Number' />

        <View style={styles.buttonsContainer}>
          <Button title='Reset' onPress={() => {
          }} />
          <Button title='Confirm' onPress={() => {
          }} />
        </View>
      </View>
    </View>
  );
};