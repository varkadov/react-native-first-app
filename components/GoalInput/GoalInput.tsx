import React, { useCallback, useState } from 'react';
import { Button, Modal, TextInput, View } from 'react-native';
import { styles } from './GoalInput.styles';

interface Props {
  visible: boolean;
  onAddItem: (text: string) => void;
  onClose: () => void;
}

export const GoalInput: React.FunctionComponent<Props> = ({
  visible,
  onAddItem,
  onClose,
}) => {
  const [value, setValue] = useState<string>('');

  const handleChangeText = useCallback((text) => {
    setValue(text);
  }, []);

  const handleSubmit = useCallback(() => {
    onAddItem(value);
    setValue('');
  }, [value, onAddItem]);

  const handleCancelButtonPress = useCallback(() => {
    setValue('');
    onClose();
  }, [onClose]);

  return (
    <Modal visible={visible} animationType='slide'>
      <View style={styles.root}>
        <TextInput
          style={styles.input}
          value={value}
          placeholder='Course Goal'
          clearButtonMode='always'
          blurOnSubmit={false}
          autoFocus
          onChangeText={handleChangeText}
          onSubmitEditing={handleSubmit}
        />

        <View style={styles.controls}>
          <View style={styles.button}>
            <Button
              title='Cancel'
              color='red'
              onPress={handleCancelButtonPress}
            />
          </View>
          <View style={styles.button}>
            <Button title='Add' onPress={handleSubmit} />
          </View>
        </View>
      </View>
    </Modal>
  );
};
