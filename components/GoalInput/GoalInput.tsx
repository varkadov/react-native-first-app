import React, { useCallback, useState } from 'react';
import { Button, TextInput, View } from 'react-native';
import { styles } from './GoalInput.styles';

interface Props {
  onAddItem: (text: string) => void;
}

export const GoalInput: React.FunctionComponent<Props> = ({ onAddItem }) => {
  const [value, setValue] = useState<string>('');

  const handleChangeText = useCallback((text) => {
    setValue(text);
  }, []);

  const handleSubmit = useCallback(() => {
    onAddItem(value);
    setValue('');
  }, [value, onAddItem]);

  return (
    <View style={styles.root}>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={handleChangeText}
        placeholder='Course Goal'
        clearButtonMode='always'
        blurOnSubmit={false}
        onSubmitEditing={handleSubmit}
      />

      <Button title='Add' disabled={!value} onPress={handleSubmit} />
    </View>
  );
};
