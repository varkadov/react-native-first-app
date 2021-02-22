import React from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { BodyText } from '../../components/BodyText/BodyText';
import { Title } from '../../components/Title/Title';
import { MainButton } from '../../components/MainButton/MainButton';
import { colors } from '../../constants/colors';

const imageWidth = Dimensions.get('window').width - 60;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 40,
  },
  title: {
    marginBottom: 20,
  },
  text: {
    marginTop: 40,
  },
  button: {
    marginTop: 20,
  },
  imageContainer: {
    width: imageWidth,
    height: imageWidth,
    borderRadius: imageWidth / 2,
    borderWidth: 3,
    borderColor: 'black',
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  highlight: {
    color: colors.primary,
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
    <ScrollView>
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
          Number <Text style={styles.highlight}>{userNumber}</Text> was guessed
          on <Text style={styles.highlight}>{rounds}</Text> attempts
        </BodyText>

        <View style={styles.button}>
          <MainButton onPress={onRestart}>Restart</MainButton>
        </View>
      </View>
    </ScrollView>
  );
};
