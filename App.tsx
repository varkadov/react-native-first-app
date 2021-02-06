import React, { useCallback, useState } from 'react';
import { Button, Text, TextInput, View, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const styles = StyleSheet.create({
  root: {
    paddingBottom: 30,
    paddingLeft: 30,
    paddingRight: 30,
  },
  controls: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#ccc',
    marginLeft: -30,
    marginRight: -30,
    paddingTop: 40,
    paddingBottom: 20,
    paddingLeft: 30,
    paddingRight: 30,
  },
  input: {
    padding: 10,
    fontSize: 20,
    borderColor: 'black',
    borderWidth: 1,
    flexGrow: 1,
    backgroundColor: '#fff',
  },
  list: {
    marginTop: 30,
  },
  listItem: {
    paddingTop: 5,
    paddingBottom: 5,
    fontSize: 20,
  },
});

export default function App() {
  const [value, setValue] = useState('');
  const [list, setList] = useState<string[]>([]);

  const handleChangeText = useCallback((text) => {
    setValue(text);
  }, []);

  const handleSubmit = useCallback(() => {
    if (!value) {
      return;
    }

    setList((v) => [...v, value]);
    setValue('');
  }, [value]);

  const handleRemove = useCallback((index) => {
    setList((v) => {
      v.splice(index, 1);

      return [...v];
    });
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

      <View style={styles.list}>
        {list.map((item, index) => (
          <Text
            key={index}
            style={styles.listItem}
            onPress={() => handleRemove(index)}
          >
            {item}
          </Text>
        ))}
      </View>

      <StatusBar style='auto' />
    </View>
  );
}
