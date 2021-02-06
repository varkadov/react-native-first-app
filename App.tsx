import React, { useCallback, useState } from 'react';
import { Button, ScrollView, Text, TextInput, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { styles } from './App.styles';

interface ListItem {
  id: number;
  text: string;
}

let id = 0;

interface HandleRemove {
  (item: ListItem): void;
}

export default function App() {
  const [value, setValue] = useState('');
  const [list, setList] = useState<ListItem[]>([]);

  const handleChangeText = useCallback((text) => {
    setValue(text);
  }, []);

  const handleSubmit = useCallback(() => {
    if (!value) {
      return;
    }

    setList((v) => [...v, { id: id++, text: value }]);
    setValue('');
  }, [value]);

  const handleRemove = useCallback<HandleRemove>((item) => {
    setList((v) => v.filter((i) => i !== item));
  }, []);

  return (
    <View style={styles.root}>
      <View style={styles.controls}>
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

      <ScrollView>
        {list.map((item) => (
          <View key={item.id} style={styles.listItem}>
            <Text onPress={() => handleRemove(item)}>{item.text}</Text>
          </View>
        ))}
      </ScrollView>

      <StatusBar style='auto' />
    </View>
  );
}
