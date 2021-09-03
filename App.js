import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, View } from 'react-native'
// import CarItem from './components/CarItem'
import CarsList from './components/CarsList'

export default function App() {
  return (
    <View style={styles.container}>
      {/* <CarItem
        name={'Model X'}
        tagline={'Order Online Now'}
        taglineCTA={'Touchless Delivery'}
        image={require('./assets/images/ModelX.jpeg')}
      /> */}
      <CarsList />
      <StatusBar style='auto' />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
