import React from 'react'
import { View, Text, ImageBackground } from 'react-native'
import styles from './styles'

const CarItem = () => {
  return (
    <View style={styles.carContainer}>
      <ImageBackground
        source={require('../../assets/images/ModelS.jpeg')}
        style={styles.image}
      />

      <View style={styles.titles}>
        <Text style={styles.title}>Model S</Text>
        <Text styles={styles.subtitle}>Starting at $69,000</Text>
      </View>
    </View>
  )
}

export default CarItem
