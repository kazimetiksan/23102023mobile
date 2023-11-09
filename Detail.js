import React from "react";

import {
    SafeAreaView,
    View,
    Text
} from 'react-native'

import { useRoute } from "@react-navigation/native";

const Detail = () => {

    const {params:user} = useRoute()

    // console.log('props', params)

    return (
        <SafeAreaView>
            <View>
                <Text>{user.firstName}</Text>
            </View>
        </SafeAreaView>
    )
}

export default Detail