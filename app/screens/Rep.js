import React from 'react'
import { SafeAreaView, Text, TouchableOpacity, View, Image } from 'react-native';

export default function Rep (props) {
  const rep = props.route.params
  return (
    <SafeAreaView>
      <Text> {rep.name} </Text>
      <Text> {rep.party} </Text>
      {rep.photoUrl !== undefined
          ? <Image style={{height: 50, width: 50}} source={{uri: rep.photoUrl}} />
          : null
      }

    </SafeAreaView>
  )
}

