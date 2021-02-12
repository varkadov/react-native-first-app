import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { colors } from '../../constants/colors';
import { Card } from '../../components/Card/Card';
import { Input } from '../../components/Input/Input';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
  },
  inputContainer: {
    width: 300,
    maxWidth: '80%',
    alignItems: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  button: {
    width: 100,
  },
  input: {
    width: '100%',
    textAlign: 'center',
  },
});

export const StartGameScreen: React.FunctionComponent = () => {
  return (
    <View style={styles.root}>
      <Text style={styles.title}>Start a New Game!</Text>

      <Card style={styles.inputContainer}>
        <Text>Select a Number</Text>

        <Input
          style={styles.input}
          blurOnSubmit
          autoCapitalize='none'
          autoCorrect={false}
          keyboardType='number-pad'
          maxLength={2}
        />

        <View style={styles.buttonsContainer}>
          <View style={styles.button}>
            <Button title='Reset' color={colors.primary} onPress={() => {}} />
          </View>
          <View style={styles.button}>
            <Button title='Confirm' color={colors.accent} onPress={() => {}} />
          </View>
        </View>
      </Card>
    </View>
  );
};
