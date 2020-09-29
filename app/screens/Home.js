import React from 'react';
import { SafeAreaView, Text, TouchableOpacity, StyleSheet, View, Image } from 'react-native';
import name from '../../assets/name.png';
import address from '../../assets/address.png';
import newlogo from '../../assets/newlogo.png';
import key from '../../assets/passkey.png';
import add from '../../assets/add.png';

export default function Home ({ navigation }) {
  return (

    <SafeAreaView style={{
        backgroundColor: '#fff',
        flex: 1,
        flexDirection: 'column'
      }}>

        <View style={{
          backgroundColor: '#F1D302',
          flex: 6,
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          alignItems: 'center'
        }}>
          <Image source={newlogo} style={{height: 350, width: 350}}></Image>
        </View>

        <View style={{
          backgroundColor: '#F1D302',
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          alignItems: 'center'
        }}>

            <View>
              <TouchableOpacity onPress={() => {
              navigation.navigate('Register')
              }}>
                <Image source={add} style={{height: 35, width: 35}}></Image>
              </TouchableOpacity>
            </View>

            <View>
              <TouchableOpacity onPress={() => {
              navigation.navigate('Login')
              }}>
                <Image source={key} style={{height: 35, width: 35}}></Image>
              </TouchableOpacity>
            </View>

            <View>
              <TouchableOpacity onPress={() => {
              navigation.navigate('AddressInput')
              }}>
                <Image source={address} style={{height: 37, width: 37}}></Image>
              </TouchableOpacity>
            </View>

            <View>
              <TouchableOpacity onPress={() => {
              navigation.navigate('SenateSearch')
              }}>
                <Image source={name} style={{height: 40, width: 40}}></Image>
              </TouchableOpacity>
            </View>
        </View>

    </SafeAreaView>

  )
}
