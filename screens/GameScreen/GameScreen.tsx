import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Alert, FlatList, StyleSheet, View, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { NumberContainer } from '../../components/NumberContainer/NumberContainer';
import { Card } from '../../components/Card/Card';
import { Title } from '../../components/Title/Title';
import { MainButton } from '../../components/MainButton/MainButton';
import { ListItem } from './components/ListItem/ListItem';

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
    marginTop: Dimensions.get('window').height > 600 ? 30 : 5,
    width: '90%',
  },
  button: {
    width: 100,
    marginHorizontal: 5,
  },
  listContainer: {
    width: '100%',
    flex: 1,
    alignItems: 'center',
  },
  list: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
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
  const [currentGuess, setCurrentGuess] = useState<number>(() =>
    generateRandomBetween(currentLow.current, currentHigh.current, userGuess)
  );
  const [pastGuesses, setPastGuesses] = useState<number[]>([currentGuess]);

  useEffect(() => {
    if (userGuess === currentGuess) {
      onGameOver(pastGuesses.length);
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

      if (direction === 'lower') {
        currentHigh.current = currentGuess;
      } else {
        currentLow.current = currentGuess + 1;
      }

      const newGuess = generateRandomBetween(
        currentLow.current,
        currentHigh.current,
        currentGuess
      );

      setCurrentGuess(newGuess);
      setPastGuesses((v) => [newGuess, ...v]);
    },
    [currentGuess, userGuess]
  );

  return (
    <View style={styles.root}>
      <Title>Opponent's Guess</Title>

      <NumberContainer chosenNumber={currentGuess} />

      <Card style={styles.buttonsContainer}>
        <View style={styles.button}>
          <MainButton onPress={() => handleNext('lower')}>
            <Ionicons name='md-remove' size={24} color='white' />
          </MainButton>
        </View>
        <View style={styles.button}>
          <MainButton onPress={() => handleNext('greater')}>
            <Ionicons name='md-add' size={24} color='white' />
          </MainButton>
        </View>
      </Card>

      <View style={styles.listContainer}>
        <FlatList
          data={pastGuesses}
          keyExtractor={(i) => String(i)}
          renderItem={(i) => (
            <ListItem numberOfRound={pastGuesses.length - i.index}>
              {i.item}
            </ListItem>
          )}
          contentContainerStyle={styles.list}
        />
      </View>
    </View>
  );
};
