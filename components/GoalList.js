import React from 'react';

import GoalItem from "./GoalItem";
import {FlatList} from "react-native";

const GoalList = ({goals, onDelete}) => {
    return (
        <FlatList data={goals} renderItem={itemDate => <GoalItem value={itemDate.item.value} itemKey={itemDate.item.key}
                                                                 onDelete={onDelete}/>}/>
    );
};

export default GoalList;