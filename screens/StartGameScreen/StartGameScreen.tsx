import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    padding: 10,
    alignItems: 'center'
  }
});

export const StartGameScreen: React.FunctionComponent = () => {
  return (
    <View style={styles.root}>
      <Text>The Game Screen</Text>
    </View>
  );
};