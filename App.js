import React from 'react';
import {View, TextInput, Button, StyleSheet} from 'react-native';

const App = () => {
    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput placeholder="Course Goal"
                           style={styles.input}/>
                <Button title="Add"/>
            </View>
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
    }
});

export default App;