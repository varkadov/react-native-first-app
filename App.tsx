import React, { useCallback, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Header } from './components/Header/Header';
import { StartGameScreen } from './screens/StartGameScreen/StartGameScreen';
import { GameScreen } from './screens/GameScreen/GameScreen';

interface HandleGameStart {
  (userNumber: number): void;
}

export default function App() {
  const [userNumber, setUserNumber] = useState<number | undefined>();

  const handleGameStart = useCallback<HandleGameStart>((num) => {
    setUserNumber(num);
  }, []);

  return (
    <View style={styles.root}>
      <Header title='Guess a Number' />

      {!userNumber ? (
        <StartGameScreen onStartGame={handleGameStart} />
      ) : (
        <GameScreen userGuess={userNumber} />
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
