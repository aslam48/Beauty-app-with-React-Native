import { ActivityIndicator, Image, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {FontAwesome, MaterialIcons } from '@expo/vector-icons';
import { Screen3 } from '../assets';
import { fetchFeeds } from '../sanity';
import { useDispatch, useSelector } from 'react-redux';
import { SET_FEEDS } from '../context/actions/feedActions';
import Feeds from '../components/Feeds';

const HomeScreen = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const feeds = useSelector((state)=> state.feeds)
  const dispatch = useDispatch()

  const handleSearchTerm = (text) => {
    searchTerm(text)
  }

  useEffect(() => {
    setIsLoading(true)
    try{
      fetchFeeds().then(res => {
        // console.log(res)
        dispatch(SET_FEEDS(res))
      // console.log("feed from store", feeds.feeds)
        setInterval(() => { 
          setIsLoading(false)
        }, 2000)
      })
    }catch (error){
      console.log(error)
      setIsLoading(false)
    } 
    
  },[])

  

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
            onChangeText={handleSearchTerm}
          />
        </View>

        <TouchableOpacity className="w-12 h-12 rounded-xl flex items-center justify-center bg-white">
          <FontAwesome name="filter" size={24} color="#7f7f7f" />
        </TouchableOpacity>
      </View>

      {/* Scrollable container  */}
      <ScrollView className="flex1 w-full">
        {isLoading ? (
          <View className="flex-1 h-80 items-center justify-center">
            <ActivityIndicator size={"large"} color={"teal"} />
          </View>
        ) : (
        <>
        <Feeds feeds={feeds?.feeds}/>
        </>
        )}
      </ScrollView>
  </SafeAreaView>
  )
}
 
export default HomeScreen
