import React from 'react'
import { Text, Button } from 'react-native'

// Custom Components
import GeneralContainer from '../components/Layout/GeneralContainer'

const Home = ({ navigation }) => {
  return (
    <GeneralContainer>
      <Text>This is the Home Page!!</Text>
      <Button
        title="Profile page"
        onPress={() => {
          navigation.navigate('Profile')
        }}
      />
    </GeneralContainer>
  )
}

export default Home
