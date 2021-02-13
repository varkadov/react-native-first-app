import React, { useCallback, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Header } from './components/Header/Header';
import { StartGameScreen } from './screens/StartGameScreen/StartGameScreen';
import { GameScreen } from './screens/GameScreen/GameScreen';
import { GameOverScreen } from './screens/GameOverScreen/GameOverScreen';

interface HandleGameStart {
  (userNumber: number): void;
}

interface HandleGameOver {
  (guessNumbers: number): void;
}

interface HandleRestart {
  (): void;
}

export default function App() {
  const [userNumber, setUserNumber] = useState<number | undefined>();
  const [guessRounds, setGuessRounds] = useState<number | undefined>(undefined);

  const handleGameStart = useCallback<HandleGameStart>((num) => {
    setUserNumber(num);
    setGuessRounds(undefined);
  }, []);

  const handleGameOver = useCallback<HandleGameOver>((n) => {
    setGuessRounds(n);
  }, []);

  const handleRestart = useCallback<HandleRestart>(() => {
    setUserNumber(undefined);
    setGuessRounds(undefined);
  }, []);

  return (
    <View style={styles.root}>
      <Header title='Guess a Number' />

      {guessRounds !== undefined && userNumber ? (
        <GameOverScreen
          userNumber={userNumber}
          rounds={guessRounds}
          onRestart={handleRestart}
        />
      ) : userNumber ? (
        <GameScreen userGuess={userNumber} onGameOver={handleGameOver} />
      ) : (
        <StartGameScreen onStartGame={handleGameStart} />
      )}

      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});
