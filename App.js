import React, {useState} from 'react';
import {View, TextInput, Button, StyleSheet, Text, ScrollView, FlatList} from 'react-native';

const App = () => {
    const [goal, setGoal] = useState('');
    const [goals, setGoals] = useState([]);

    const goalOnChange = (value) => {
        setGoal(value);
    };

    const addOnPress = () => {
        setGoal('');
        setGoals([...goals, {value: goal, key: Math.random().toString()}]);
    };

    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput placeholder="Course Goal" style={styles.input} onChangeText={goalOnChange} value={goal}/>
                <Button title="Add" onPress={addOnPress}/>
            </View>
            <FlatList data={goals} renderItem={itemDate => <View style={styles.item}><Text>{itemDate.item.value}</Text></View>}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 50
    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    input: {
        width: '80%',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        padding: 10
    },
    item: {
        padding: 10,
        marginVertical: 10,
        backgroundColor: '#ccc',
        borderColor: 'black',
        borderWidth: 1
    }
});

export default App;