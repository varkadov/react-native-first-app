import React from 'react';
import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Header } from './components/Header/Header';

export default function App() {
  return (
    <View style={styles.root}>
      <Header title='Guess a Number' />

      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1
  }
});
