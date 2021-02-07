import React, { useCallback, useState } from 'react';
import { Button, FlatList, View, Text } from 'react-native';
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
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  const handleAddItem = useCallback((text) => {
    if (!text) {
      return;
    }

    setList((v) => [...v, { id: String(id++), text }]);
    setIsModalVisible(false);
  }, []);

  const handleRemove = useCallback<HandleRemove>((id) => {
    setList((v) => v.filter((i) => i.id !== id));
  }, []);

  const addNewGoalHandler = useCallback(() => {
    setIsModalVisible(true);
  }, []);

  const handleModalClose = useCallback(() => {
    setIsModalVisible(false);
  }, []);

  return (
    <View style={styles.root}>
      <Button title='Add New Goal' onPress={addNewGoalHandler} />

      <GoalInput
        visible={isModalVisible}
        onAddItem={handleAddItem}
        onClose={handleModalClose}
      />

      <View style={styles.listItem}>
        <FlatList
          data={list}
          renderItem={({ item }) => (
            <GoalItem id={item.id} title={item.text} onRemove={handleRemove} />
          )}
        />
      </View>

      <StatusBar style='auto' />
    </View>
  );
}
