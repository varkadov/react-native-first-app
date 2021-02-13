import React, { useCallback, useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import { Header } from './components/Header/Header';
import { StartGameScreen } from './screens/StartGameScreen/StartGameScreen';
import { GameScreen } from './screens/GameScreen/GameScreen';
import { GameOverScreen } from './screens/GameOverScreen/GameOverScreen';

const fetchFont = async () =>
  Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });

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
  const [isFetching, setIsFetching] = useState<boolean>(true);

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

  if (isFetching) {
    return (
      <AppLoading
        startAsync={fetchFont}
        onFinish={() => setIsFetching(false)}
        onError={(err) => console.log(err)}
      />
    );
  }

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
