import React, { useCallback, useState } from 'react';
import { FlatList, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { GoalItem } from './components/GoalItem/GoalItem';
import { GoalInput } from './components/GoalInput/GoalInput';
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
  const [list, setList] = useState<ListItem[]>([]);

  const handleAddItem = useCallback((text) => {
    if (!text) {
      return;
    }

    setList((v) => [...v, { id: String(id++), text }]);
  }, []);

  const handleRemove = useCallback<HandleRemove>((id) => {
    setList((v) => v.filter((i) => i.id !== id));
  }, []);

  return (
    <View style={styles.root}>
      <GoalInput onAddItem={handleAddItem} />

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
