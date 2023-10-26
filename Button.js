import React from "react"

import {
    TouchableOpacity,
    View,
    Text
} from 'react-native'

const Button = ({
    variant="primary"
}) => {

    const backgroundColor = () => {
        if (variant === 'primary') {
            return 'blue'
        } else if (variant === 'secondary') {
            return 'gray'
        } 

        return 'green'
    }

    return (
        <TouchableOpacity activeOpacity={0.7} onPress={() => {
            console.log('user touch')
        }}>
            <View style={{
                width: 200,
                height: 80,
                backgroundColor: backgroundColor(),
                borderRadius: 8,
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Text style={{
                    color: 'white'
                }}>Some Button</Text>
            </View> 
        </TouchableOpacity>
)
}

export default Button