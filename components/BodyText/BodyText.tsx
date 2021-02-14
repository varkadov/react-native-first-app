import React from 'react';
import { Text, StyleSheet, TextProps, TextStyle } from 'react-native';

const styles = StyleSheet.create({
  root: {
    fontFamily: 'open-sans',
    fontSize: 16,
  },
});

interface Props extends TextProps {
  style?: TextStyle;
}

export const BodyText: React.FunctionComponent<Props> = ({
  children,
  style,
  ...props
}) => (
  <Text style={{ ...styles.root, ...style }} {...props}>
    {children}
  </Text>
);
