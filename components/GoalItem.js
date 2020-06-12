import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from "react-native";

const GoalItem = ({value, onDelete, itemKey}) => {
    return (
        <TouchableOpacity onPress={() => {onDelete(itemKey)}}>
            <View style={styles.item}>
                <Text>{value}</Text>
            </View>
        </TouchableOpacity>
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