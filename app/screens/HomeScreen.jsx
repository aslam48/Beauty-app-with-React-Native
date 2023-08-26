import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const HomeScreen = () => {
  return (
    <View className="flex-1 justify-center align-center">
    <Text className="text-red-500">Home Screen</Text>
    <StatusBar style="auto" />
  </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})