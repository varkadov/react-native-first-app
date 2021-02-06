import React, { useCallback, useState } from 'react';
import {
  Button,
  ScrollView,
  Text,
  TextInput,
  View,
  FlatList,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { GoalItem } from './components/GoalItem/GoalItem';
import { styles } from './App.styles';

interface ListItem {
  id: string;
  text: string;
}

let id = 0;

interface HandleRemove {
  (id: string): void;
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

    setList((v) => [...v, { id: String(id++), text: value }]);
    setValue('');
  }, [value]);

  const handleRemove = useCallback<HandleRemove>((id) => {
    setList((v) => v.filter((i) => i.id !== id));
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

      <FlatList
        data={list}
        renderItem={({ item }) => (
          <GoalItem id={item.id} title={item.text} onRemove={handleRemove} />
        )}
      />

      <StatusBar style='auto' />
    </View>
  );
}
