import {StatusBar} from 'expo-status-bar';
import React, {useState} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

export default function App() {
    const [text, setText] = useState('Open up App.tsx to start working on your app');

    const handlePress = () => {
        setText('Text has been changed');
    }

    return (
        <View style={styles.container}>
            <Text>{text}</Text>
            <Button title='Change text' onPress={handlePress}/>
            <StatusBar style="auto"/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
