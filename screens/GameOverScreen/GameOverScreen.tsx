import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { BodyText } from '../../components/BodyText/BodyText';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    marginVertical: 5,
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
      <BodyText style={styles.text}>The Game Over is Over</BodyText>

      <BodyText style={styles.text}>
        Number {userNumber} was guessed on {rounds} attempts
      </BodyText>

      <View style={styles.button}>
        <Button title='Restart' onPress={onRestart} />
      </View>
    </View>
  );
};
