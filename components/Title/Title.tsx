import React from 'react';
import { Text, StyleSheet, TextProps, TextStyle } from 'react-native';

const styles = StyleSheet.create({
  root: {
    fontFamily: 'open-sans-bold',
    fontSize: 20,
  },
});

interface Props extends TextProps {
  style?: TextStyle;
}

export const Title: React.FunctionComponent<Props> = ({
  children,
  style,
  ...props
}) => (
  <Text style={{ ...styles.root, ...style }} {...props}>
    {children}
  </Text>
);
