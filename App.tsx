import React from 'react';
import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Header } from './components/Header/Header';
import { StartGameScreen } from './screens/StartGameScreen/StartGameScreen';

export default function App() {
  return (
    <View style={styles.root}>
      <Header title='Guess a Number' />

      <StartGameScreen />

      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1
  }
});
