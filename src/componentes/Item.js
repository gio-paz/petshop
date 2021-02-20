import React from 'react';
import {View,Text} from 'react-native';

const Item = (props) => {
    return(
        <View>
            {props.children}
        </View>
    );
}



export default Item;