import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';

import GoalList from "./components/GoalList";
import GoalInputBox from "./components/GoalInputBox";

const App = () => {
    const [goals, setGoals] = useState([]);

    const addOnPress = (goal) => {
        setGoals([...goals, {value: goal, key: Math.random().toString()}]);
    };

    return (
        <View style={styles.container}>
            <GoalInputBox addOnPass={addOnPress}/>
            <GoalList goals={goals}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 50
    }
});

export default App;