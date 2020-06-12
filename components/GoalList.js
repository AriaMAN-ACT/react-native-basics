import React from 'react';

import GoalItem from "./GoalItem";
import {FlatList} from "react-native";

const GoalList = ({goals}) => {
    return (
        <FlatList data={goals} renderItem={itemDate => <GoalItem value={itemDate.item.value}/>}/>
    );
};

export default GoalList;