import React, {useState} from 'react';

import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  TouchableOpacity
} from 'react-native'

import Button from './Button';

import axios from 'axios';

import { useNavigation } from '@react-navigation/native';

const Home = () => {

    const {navigate} = useNavigation()

    const [userList, setUserList] = useState([])
  
    const loadData = () => {
      
      const url = 'https://reactpm.azurewebsites.net/api/users'
      axios.get(url)
      .then((response) => {
  
        setUserList(response.data)
  
      })
      .catch((error) => {
  
      })
    }
  
    return (
      <SafeAreaView>
        <View>
          <Button title="Load Data" onPress={() => {
              console.log('-- pressed');
  
              loadData()
          }} />
        </View>
        <View style={{
          marginTop: 30
        }}>
          <FlatList 
            data={userList}
            renderItem={({item}) => (
                <TouchableOpacity activeOpacity={0.6} onPress={() => {
                    console.log('selected', item)
                    navigate('Detail', item)
                }}>
                    <View style={{
                    margin: 10
                    }}>
                    <Text>{item.firstName} {item.lastName}</Text>
                    </View>
                </TouchableOpacity>
              )
            }
            keyExtractor={item => item._id}
          />
        </View>
      </SafeAreaView>
    )
  }

  export default Home