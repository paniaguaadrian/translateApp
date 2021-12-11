import React from 'react'
import { StyleSheet, View } from 'react-native'

const GeneralContainer = (props) => {
  return <View style={styles.container}>{props.children}</View>
}

export default GeneralContainer

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
})
