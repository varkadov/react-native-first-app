import React from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';

const styles = StyleSheet.create({
  root: {
    shadowColor: 'black',
    shadowOffset: { height: 2, width: 0 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    backgroundColor: 'white',
    elevation: 5,
    padding: 20,
    borderRadius: 10
  }
});

interface Props {
  style: ViewStyle;
}


export const Card: React.FunctionComponent<Props> = ({ style, children }) =>
  (
    <View style={{ ...styles.root, ...style }}>
      {children}
    </View>
  );