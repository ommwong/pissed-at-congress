import React from 'react'
import { SafeAreaView, Text, TouchableOpacity, View, Image } from 'react-native';
import * as Linking from 'expo-linking';
// import * as Sharing from 'expo-sharing'; //SHARING

const callPhone = (number) => {
  Linking.openURL(`tel:+1${number}`)
};

export default function Rep (props) {

  const rep = props.route.params;

  return (
    <SafeAreaView>
      {rep.photoUrl !== undefined
          ? <Image style={{height: 200, width: 200}} source={{uri: rep.photoUrl}} />
          : null
      }
      <Text> {rep.name} </Text>
      <Text> {rep.party} </Text>

      {rep.urls.toString().substring(22, rep.urls.length).includes('senate.gov/')
        ? <Text> Senate</Text>
        : <Text> House</Text>
      }

      <Text onPress={() => {callPhone(rep.phones)}}> {rep.phones} </Text>

      <Text> SHARE REP </Text>

    </SafeAreaView>
  )
}

