import React from 'react';
import {Text, View, StyleSheet} from "react-native";

const GoalItem = ({value}) => {
    return (
        <View style={styles.item}>
            <Text>{value}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    item: {
        padding: 10,
        marginVertical: 10,
        backgroundColor: '#ccc',
        borderColor: 'black',
        borderWidth: 1
    }
});

export default GoalItem;