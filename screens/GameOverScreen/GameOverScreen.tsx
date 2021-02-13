import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    marginTop: 20,
  },
});

interface Props {
  rounds: number;
  userNumber: number;
  onRestart: () => void;
}

export const GameOverScreen: React.FunctionComponent<Props> = ({
  rounds,
  userNumber,
  onRestart,
}) => {
  return (
    <View style={styles.root}>
      <Text>The Game Over is Over</Text>
      <Text>
        Number {userNumber} was guessed on {rounds} attempts
      </Text>

      <View style={styles.button}>
        <Button title='Restart' onPress={onRestart} />
      </View>
    </View>
  );
};
