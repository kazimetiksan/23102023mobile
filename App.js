import React, {useState} from 'react';

import {
  View,
  Text,
  SafeAreaView,
  FlatList
} from 'react-native'

import Button from './Button';

import axios from 'axios';

const App = () => {

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
      <View>
      {
        userList.map((item) => {
          return (
            <View key={item._id}>
              <Text>{item.firstName} {item.lastName}</Text>
            </View>
          )
        })
      }
      </View>
      <View>
        <FlatList 
          data={userList}
          renderItem={({item}) => (
              <View>
                <Text>{item.firstName} {item.lastName}</Text>
              </View>
            )
          }
          keyExtractor={item => item._id}
        />
      </View>
    </SafeAreaView>
  )
}

export default App;
