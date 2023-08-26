import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {FontAwesome, MaterialIcons } from '@expo/vector-icons';
import { Screen3 } from '../assets';

const HomeScreen = () => {
  return (
    <SafeAreaView className="flex-1 justify-start align-center bg-[#EBEAEF]">
  <View className="w-full flex-row items-center justify-between px-4 py-2">
   <MaterialIcons name="chevron-left" size={32} color="#555" />
   <Image source={Screen3} resizeMode='cover' className="w-12 h-12 rounded-xl"/>
  </View>


  {/* searc box  */}
  <View className="flex-row items-center justify-between px-4 py-2 w-full space-x-6">
        <View className="px-4 py-2 bg-white rounded-xl flex-1 flex-row items-center justify-center space-x-2">
          <MaterialIcons name="search" size={24} color="#7f7f7f" />
          <TextInput
            className="text-base font-semibold text=[#555] flex-1 py-1 -mt-1 "
            placeholder="Search Here..."
            // value={searchTerm}
            // onChangeText={handleSearchTerm}
          />
        </View>

        <TouchableOpacity className="w-12 h-12 rounded-xl flex items-center justify-center bg-white">
          <FontAwesome name="filter" size={24} color="#7f7f7f" />
        </TouchableOpacity>
      </View>
  </SafeAreaView>
  )
}

export default HomeScreen
