import { View, Text } from 'react-native'
import React from 'react'
import { Button } from 'react-native'
import { TouchableOpacity } from 'react-native'

const EditProfile = ({onShare}) => {
  return (
    <View className="flex flex-row justify-between px-4 mt-4">
        <TouchableOpacity activeOpacity={0.7} className="px-10 py-3 rounded-lg dark:bg-gray-500/40 bg-gray-300/30">
            <Text className="text-black dark:text-white">Edit profile</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onShare} activeOpacity={0.7} className="px-10 py-3 rounded-lg dark:bg-gray-500/40 bg-gray-300/30">
            <Text className="text-black dark:text-white">Share profile</Text>
        </TouchableOpacity>
    </View>
  )
}

export default EditProfile