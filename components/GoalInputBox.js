import React, {useState} from 'react';
import {Button, TextInput, View, StyleSheet} from "react-native";

const GoalInputBox = ({addOnPass}) => {
    const [goal, setGoal] = useState('');

    const goalOnChange = (value) => {
        setGoal(value);
    };

    const addOnPassHandler = () => {
        setGoal('');
        addOnPass(goal);
    };

    return (
        <View style={styles.inputContainer}>
            <TextInput placeholder="Course Goal" style={styles.input} onChangeText={goalOnChange} value={goal}/>
            <Button title="Add" onPress={addOnPassHandler}/>
        </View>
    );
};

const styles = StyleSheet.create({
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
    }
});

export default GoalInputBox;