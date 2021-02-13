import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { NumberContainer } from '../../components/NumberContainer/NumberContainer';
import { Card } from '../../components/Card/Card';

const generateRandomBetween = (
  min: number,
  max: number,
  exclude: number
): number => {
  const minValue = Math.ceil(min);
  const maxValue = Math.floor(max);

  const randomNumber =
    Math.floor(Math.random() * (maxValue - minValue)) + minValue;

  if (randomNumber === exclude) {
    return generateRandomBetween(min, max, exclude);
  }

  return randomNumber;
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    maxWidth: '80%',
  },
  button: {
    width: 100,
    marginHorizontal: 5,
  },
});

interface Props {
  userGuess: number;
}

export const GameScreen: React.FunctionComponent<Props> = ({ userGuess }) => {
  const [currentGuess, setCurrentGuess] = useState<number>(() =>
    generateRandomBetween(1, 100, userGuess)
  );

  return (
    <View style={styles.root}>
      <Text>Opponent's Guess</Text>

      <NumberContainer chosenNumber={currentGuess} />

      <Card style={styles.buttonsContainer}>
        <View style={styles.button}>
          <Button title='Lower' onPress={() => {}} />
        </View>
        <View style={styles.button}>
          <Button title='Greater' onPress={() => {}} />
        </View>
      </Card>
    </View>
  );
};
