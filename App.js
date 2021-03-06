import 'react-native-gesture-handler';
import React from 'react'
import { View, Text } from 'react-native'
import Stack from './src/navigation/Stack';
import BottomTab from './src/navigation/BottomTab';
import Drawer from './src/navigation/Drawer';
import {SafeAreaProvider} from 'react-native-safe-area-context'
import Loader from './src/screens/Loader';

const App = () => {
  
  return (
    <SafeAreaProvider>
      <Stack/>
      <Loader/>
    </SafeAreaProvider>
  )
}

export default App
