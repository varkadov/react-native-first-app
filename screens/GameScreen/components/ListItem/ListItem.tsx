import React from 'react';
import { StyleSheet, View } from 'react-native';
import { BodyText } from '../../../../components/BodyText/BodyText';

const styles = StyleSheet.create({
  root: {
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 15,
    marginVertical: 10,
    justifyContent: 'center',
    flexDirection: 'row',
  },
});

interface Props {
  numberOfRound: number;
}

export const ListItem: React.FunctionComponent<Props> = ({
  children,
  numberOfRound,
}) => {
  return (
    <View style={styles.root}>
      <BodyText>
        #{numberOfRound} – {children}
      </BodyText>
    </View>
  );
};
