import React from 'react';
import { SafeAreaView, Text, TouchableOpacity, StyleSheet, View, Image } from 'react-native';
import name from '../../assets/name.png';
import address from '../../assets/address.png';


export default function Home ({ navigation }) {
  return (

    <SafeAreaView style={{
        backgroundColor: '#fff',
        flex: 1,
        flexDirection: 'column'
      }}>

        <View style={{
          backgroundColor: 'dodgerblue',
          flex: 1.75
        }}>
          <Text>APP LOGO</Text>
        </View>

        <View style={{
          backgroundColor: 'gold',
          flex: 4
        }}>
          <Text>SLOGAN</Text>
        </View>

        <View style={{
          backgroundColor: 'tomato',
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          alignItems: 'center'
        }}>
            <View>
              <TouchableOpacity onPress={() => {
              navigation.navigate('AddressInput')
              }}>
                <Image source={address} style={{height: 45, width: 45}}></Image>
              </TouchableOpacity>
            </View>

            <View>
              <TouchableOpacity onPress={() => {
              navigation.navigate('SenateSearch')
              }}>
                <Image source={name} style={{height: 45, width: 45}}></Image>
              </TouchableOpacity>
            </View>
        </View>

    </SafeAreaView>

  )
}
