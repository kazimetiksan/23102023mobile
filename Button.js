import React from "react";

import {
    TouchableOpacity,
    View,
    Text
} from 'react-native'

const Button = ({
    title,
    onPress
}) => {

    return (
        <TouchableOpacity onPress={onPress}>
            <View>
                <Text>{title}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default Button