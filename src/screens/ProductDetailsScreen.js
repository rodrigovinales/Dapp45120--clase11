import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ProductDetailsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Y aca que ponemos ???</Text>
    </View>
  )
}

export default ProductDetailsScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FDBF50",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontFamily: "IndieFlower",
  },
})