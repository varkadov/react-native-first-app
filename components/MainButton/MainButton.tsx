import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from 'react-native';
import { colors } from '../../constants/colors';

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontFamily: 'open-sans',
    fontSize: 18,
  },
});

interface Props {
  onPress: TouchableOpacityProps['onPress'];
}

export const MainButton: React.FunctionComponent<Props> = ({
  children,
  onPress,
}) => (
  <TouchableOpacity activeOpacity={0.6} onPress={onPress}>
    <View style={styles.button}>
      <Text style={styles.text} ellipsizeMode='tail' numberOfLines={1}>
        {children}
      </Text>
    </View>
  </TouchableOpacity>
);
