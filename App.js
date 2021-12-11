import { StatusBar } from 'expo-status-bar'
import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

// Screens
import Home from './src/screens/Home'
import Profile from './src/screens/Profile'

const Stack = createNativeStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: 'TranslateApp' }}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{ title: 'Profile' }}
        />
      </Stack.Navigator>
      <StatusBar style="dark" />
    </NavigationContainer>
  )
}

export default App
