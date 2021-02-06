import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
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
  <TouchableOpacity onPress={() => onRemove(id)}>
    <View style={styles.root}>
      <Text>{title}</Text>
    </View>
  </TouchableOpacity>
);
