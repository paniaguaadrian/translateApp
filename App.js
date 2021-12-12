import * as React from 'react'

// Navigation
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

// Icons
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Foundation } from '@expo/vector-icons'
import { Entypo } from '@expo/vector-icons'

// Screens
import Record from './src/screens/Record'
import List from './src/screens/List'
import Home from './src/screens/Home'
import Profile from './src/screens/Profile'

const Tab = createBottomTabNavigator()

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: '#FD49A0',
        tabBarInactiveBackgroundColor: '#ffffff',
        tabBarInactiveTintColor: '#868B8E',
        tabBarIconStyle: { marginTop: 4 },
        tabBarLabelStyle: { fontSize: 13, paddingBottom: 3 },
        headerShown: false,
        unmountOnBlur: true,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Record"
        component={Record}
        options={{
          tabBarLabel: 'Record',
          tabBarIcon: ({ color, size }) => (
            <Foundation name="record" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="List"
        component={List}
        options={{
          tabBarLabel: 'My Lists',
          tabBarIcon: ({ color, size }) => (
            <Entypo name="list" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  )
}
