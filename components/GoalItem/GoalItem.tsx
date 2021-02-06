import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './GoadItem.styles';

interface Props {
  id: string;
  title: string;
  onRemove: (id: string) => void;
}

export const GoalItem: React.FunctionComponent<Props> = ({
  id,
  title,
  onRemove,
}) => (
  <View style={styles.root}>
    <Text onPress={() => onRemove(id)}>{title}</Text>
  </View>
);
