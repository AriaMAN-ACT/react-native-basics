import React, {useState} from 'react';
import {Button, TextInput, View, StyleSheet, Modal} from "react-native";

const GoalInputBox = ({addOnPass, visible, closeModal}) => {
    const [goal, setGoal] = useState('');

    const goalOnChange = (value) => {
        setGoal(value);
    };

    const addOnPassHandler = () => {
        setGoal('');
        addOnPass(goal);
    };

    return (
        <Modal visible={visible} animationType="slide">
            <View style={styles.inputContainer}>
                <TextInput placeholder="Course Goal" style={styles.input} onChangeText={goalOnChange} value={goal}/>
                <Button title="Add" onPress={addOnPassHandler}/>
                <Button title="cancel" onPress={closeModal} color="red"/>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        width: '80%',
        borderColor: 'black',
        borderWidth: 1,
        padding: 10,
        marginBottom: 10
    }
});

export default GoalInputBox;