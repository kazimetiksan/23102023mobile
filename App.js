/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  Text,
  View,
  SafeAreaView
} from 'react-native';

import {
  useSafeAreaInsets,
  SafeAreaProvider
} from 'react-native-safe-area-context'

const App = () => {

  return (
    <SafeAreaProvider>
      <Home />
    </SafeAreaProvider>
  )
}

const Home = () => {

  const {top} = useSafeAreaInsets()

  return (
    <View style={{
      marginTop: top
    }}>
      <View>
        <Text>Hello World</Text>
      </View>
    </View>
  );
}

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });

export default App;