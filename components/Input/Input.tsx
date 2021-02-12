import React from 'react';
import { StyleSheet, TextInput, TextInputProps } from 'react-native';

const styles = StyleSheet.create({
  root: {
    height: 30,
    borderColor: 'grey',
    borderWidth: 1,
    marginVertical: 10,
  },
});

interface Props extends TextInputProps {
  style?: TextInputProps;
}

export const Input: React.FunctionComponent<Props> = ({
  style,
  ...restProps
}) => <TextInput {...restProps} style={{ ...styles.root, ...style }} />;
