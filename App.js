import React from 'react';
import {View, TextInput, Button} from 'react-native';

const App = () => {
    return (
        <View>
            <View style={{padding: 50, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                <TextInput placeholder="Course Goal"
                           style={{width: '80%', borderBottomColor: 'black', borderBottomWidth: 1, padding: 10, marginBottom: 10}}/>
                <Button title="Add"/>
            </View>
        </View>
    );
};

export default App;