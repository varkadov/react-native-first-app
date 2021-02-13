import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../../constants/colors';

const styles = StyleSheet.create({
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
    <View style={styles.numberContainer}>
      <Text style={styles.numberText}>{chosenNumber}</Text>
    </View>
  );
};
