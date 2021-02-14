import React, { useCallback, useState } from 'react';
import {
  Alert,
  Button,
  Keyboard,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { colors } from '../../constants/colors';
import { Card } from '../../components/Card/Card';
import { Input } from '../../components/Input/Input';
import { NumberContainer } from '../../components/NumberContainer/NumberContainer';
import { Title } from '../../components/Title/Title';
import { BodyText } from '../../components/BodyText/BodyText';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  title: {
    marginVertical: 20,
  },
  inputContainer: {
    width: 300,
    maxWidth: '80%',
    alignItems: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  button: {
    width: 100,
  },
  input: {
    width: '100%',
    textAlign: 'center',
  },
  numberContainer: {
    alignItems: 'center',
  },
});

interface Props {
  onStartGame: (n: number) => void;
}

export const StartGameScreen: React.FunctionComponent<Props> = ({
  onStartGame,
}) => {
  const [value, setValue] = useState<string>('');
  const [chosenNumber, setChosenNumber] = useState<number | null>(null);

  const handleInputChange = useCallback((v: string) => {
    const numberString = v.replace(/[^0-9]/g, '');

    setValue(numberString);
  }, []);

  const handleReset = useCallback(() => {
    setValue('');
  }, []);

  const handleConfirm = useCallback(() => {
    const chosenNumber = Number.parseInt(value);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert(
        'Invalid number',
        'Number has to be a number between 1 and 99',
        [
          {
            text: 'Ok',
            style: 'default',
            onPress: handleReset,
          },
        ]
      );

      return;
    }

    setValue('');
    setChosenNumber(chosenNumber);
  }, [value]);

  const handleStartGame = useCallback(() => {
    if (chosenNumber) {
      onStartGame(chosenNumber);
    }
  }, [onStartGame, chosenNumber]);

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.root}>
        <Title style={styles.title}>Start a New Game</Title>

        {!chosenNumber ? (
          <Card style={styles.inputContainer}>
            <BodyText>Select a Number</BodyText>

            <Input
              value={value}
              style={styles.input}
              blurOnSubmit
              autoFocus
              autoCapitalize='none'
              autoCorrect={false}
              maxLength={2}
              keyboardType='number-pad'
              onChangeText={handleInputChange}
              onSubmitEditing={handleConfirm}
            />

            <View style={styles.buttonsContainer}>
              <View style={styles.button}>
                <Button
                  title='Reset'
                  color={colors.primary}
                  onPress={handleReset}
                />
              </View>
              <View style={styles.button}>
                <Button
                  title='Confirm'
                  color={colors.accent}
                  onPress={handleConfirm}
                />
              </View>
            </View>
          </Card>
        ) : (
          <Card style={styles.numberContainer}>
            <BodyText>You selected</BodyText>

            <NumberContainer chosenNumber={chosenNumber} />

            <Button title='Start game' onPress={handleStartGame} />
          </Card>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};
