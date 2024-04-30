import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { router } from 'expo-router'

const Create = () => {

  useEffect(() => {
    router.navigate("/create/");
  });
  return (
    <View>
      <Text style={{ color: "red", fontSize: 30}} >Hey</Text>
    </View>
  )
}

export default Create