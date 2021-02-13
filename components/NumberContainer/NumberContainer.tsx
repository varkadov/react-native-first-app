import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { Card } from '../Card/Card';
import { colors } from '../../constants/colors';

const styles = StyleSheet.create({
  root: {
    marginTop: 30,
    alignItems: 'center',
  },
  numberContainer: {
    borderWidth: 2,
    borderColor: colors.accent,
    padding: 10,
    borderRadius: 10,
    marginVertical: 20,
  },
  numberText: {
    color: colors.accent,
    fontSize: 22,
  },
});

interface Props {
  chosenNumber: number;
}

export const NumberContainer: React.FunctionComponent<Props> = ({
  chosenNumber,
}) => {
  return (
    <Card style={styles.root}>
      <Text>You selected</Text>

      <View style={styles.numberContainer}>
        <Text style={styles.numberText}>{chosenNumber}</Text>
      </View>

      <Button title='Start game' onPress={() => {}} />
    </Card>
  );
};
