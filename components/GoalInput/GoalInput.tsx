import React, { useCallback, useState } from 'react';
import { Button, Modal, TextInput, View } from 'react-native';
import { styles } from './GoalInput.styles';

interface Props {
  visible: boolean;
  onAddItem: (text: string) => void;
}

export const GoalInput: React.FunctionComponent<Props> = ({
  visible,
  onAddItem,
}) => {
  const [value, setValue] = useState<string>('');

  const handleChangeText = useCallback((text) => {
    setValue(text);
  }, []);

  const handleSubmit = useCallback(() => {
    onAddItem(value);
    setValue('');
  }, [value, onAddItem]);

  return (
    <Modal visible={visible} animationType='slide'>
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
    </Modal>
  );
};
