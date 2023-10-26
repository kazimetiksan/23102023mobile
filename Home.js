import React, {useState, useEffect} from "react";

import {
    Text,
    View,
    FlatList,
    TouchableOpacity
} from 'react-native';

import {
    useSafeAreaInsets,
} from 'react-native-safe-area-context'

import axios from 'axios'

import Button from "./Button";

const Home = () => {

    const { top } = useSafeAreaInsets();

    const [userList, setUserList] = useState([])

    const loadData = () => {

        const url = 'https://reactpm.azurewebsites.net/api/users'
        axios.get(url)
        .then((response) => {
            setUserList(response.data)
            console.log(response.data)
        })
        .catch((error) => {

        })
    }

    useEffect(() => {
        loadData()
    }, [])

    return (
        <View
            style={{
                marginTop: top,
            }}>
            <View>
                <Text>Merhaba World</Text>
            </View>
            <View>
            {
                userList.map((item) => {
                    return (
                        <View>
                            <Text>{item.firstName}</Text>
                            <Text>{item.lastName}</Text>
                        </View>
                    )
                })
            }
            </View>
            <View style={{
                marginTop: 50
            }}>
                <FlatList 
                    data={userList}
                    renderItem={({item, index}) => {
                        console.log('render item', item, index)

                        return (
                            <View>
                                <Text>{item.firstName}</Text>
                                <Text>{item.lastName}</Text>
                            </View>
                        )
                    }}
                    keyExtractor={item => item._id}
                />
            </View>
            <View style={{
                marginTop: 50,
                alignItems: 'center'
            }}>
                <Button variant="secondary" />
            </View>
        </View>
    );
};

export default Home