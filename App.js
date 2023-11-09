import React from 'react';

import Home from './Home';
import Detail from './Detail';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const App = () => {

  const Stack = createNativeStackNavigator();

    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Home' component={Home} />
          <Stack.Screen name='Detail' component={Detail} />
        </Stack.Navigator>
      </NavigationContainer>
    )
}

export default App;
