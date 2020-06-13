import React, {useState} from 'react';
import {View, StyleSheet, Button} from 'react-native';

import GoalList from "./components/GoalList";
import GoalInputBox from "./components/GoalInputBox";

const App = () => {
    const [goals, setGoals] = useState([]);
    const [showModal, setShowModal] = useState(false);

    const addOnPress = (goal) => {
        setGoals([...goals, {value: goal, key: Math.random().toString()}]);
        setShowModal(false);
    };

    const onDelete = (key) => {
        setGoals(goals.filter(goal => goal.key !== key));
    };

    return (
        <View style={styles.container}>
            <Button title="Create Goal" onPress={() => setShowModal(true)}/>
            <GoalInputBox addOnPass={addOnPress} visible={showModal} closeModal={() => setShowModal(false)}/>
            <GoalList goals={goals} onDelete={onDelete}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 50
    }
});

export default App;