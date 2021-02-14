import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Alert, Button, StyleSheet, View } from 'react-native';
import { NumberContainer } from '../../components/NumberContainer/NumberContainer';
import { Card } from '../../components/Card/Card';
import { Title } from '../../components/Title/Title';

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
  onGameOver: (rounds: number) => void;
}

interface HandleNext {
  (direction: 'lower' | 'greater'): void;
}

export const GameScreen: React.FunctionComponent<Props> = ({
  userGuess,
  onGameOver,
}) => {
  const currentLow = useRef<number>(1);
  const currentHigh = useRef<number>(100);
  const rounds = useRef<number>(0);
  const [currentGuess, setCurrentGuess] = useState<number>(() =>
    generateRandomBetween(currentLow.current, currentHigh.current, userGuess)
  );

  useEffect(() => {
    if (userGuess === currentGuess) {
      onGameOver(rounds.current);
    }
  }, [userGuess, currentGuess, onGameOver]);

  const handleNext = useCallback<HandleNext>(
    (direction) => {
      if (
        (direction === 'lower' && currentGuess < userGuess) ||
        (direction === 'greater' && currentGuess > userGuess)
      ) {
        Alert.alert('Do not lie!', 'You know that this is wrong...', [
          { text: 'Sorry!', style: 'cancel' },
        ]);

        return;
      }

      rounds.current++;

      if (direction === 'lower') {
        currentHigh.current = currentGuess;
      } else {
        currentLow.current = currentGuess;
      }
      setCurrentGuess(
        generateRandomBetween(
          currentLow.current,
          currentHigh.current,
          currentGuess
        )
      );
    },
    [currentGuess, userGuess]
  );

  return (
    <View style={styles.root}>
      <Title>Opponent's Guess</Title>

      <NumberContainer chosenNumber={currentGuess} />

      <Card style={styles.buttonsContainer}>
        <View style={styles.button}>
          <Button title='Lower' onPress={() => handleNext('lower')} />
        </View>
        <View style={styles.button}>
          <Button title='Greater' onPress={() => handleNext('greater')} />
        </View>
      </Card>
    </View>
  );
};
