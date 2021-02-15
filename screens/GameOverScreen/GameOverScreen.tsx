import React from 'react';
import { Button, Image, StyleSheet, View } from 'react-native';
import { BodyText } from '../../components/BodyText/BodyText';
import { Title } from '../../components/Title/Title';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    marginBottom: 20,
  },
  text: {
    marginTop: 5,
  },
  button: {
    marginTop: 20,
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: 'black',
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
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
      <Title style={styles.title}>The Game Over is Over</Title>

      <View style={styles.imageContainer}>
        <Image
          // source={{
          //   uri:
          //     'https://upload.wikimedia.org/wikipedia/commons/8/88/Summit_of_the_Matterhorn.jpg',
          // }}
          source={require('../../assets/success.png')}
          resizeMode='cover'
          style={styles.image}
        />
      </View>

      <BodyText style={styles.text}>
        Number {userNumber} was guessed on {rounds} attempts
      </BodyText>

      <View style={styles.button}>
        <Button title='Restart' onPress={onRestart} />
      </View>
    </View>
  );
};
