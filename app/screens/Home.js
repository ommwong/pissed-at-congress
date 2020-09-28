import React from 'react';
import { SafeAreaView, Text, TouchableOpacity, StyleSheet, View, Image } from 'react-native';
import name from '../../assets/name.png';
import address from '../../assets/address.png';
import logo from '../../assets/logo.png';



export default function Home ({ navigation }) {
  return (

    <SafeAreaView style={{
        backgroundColor: '#fff',
        flex: 1,
        flexDirection: 'column'
      }}>

        <View style={{
          backgroundColor: '#235789',
          flex: 6,
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          alignItems: 'center'
        }}>
          <Image source={logo} style={{height: 350, width: 350}}></Image>
        </View>

        <View style={{
          backgroundColor: '#235789',
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
