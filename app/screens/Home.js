import React from 'react';
import { SafeAreaView, Text, TouchableOpacity } from 'react-native';

export default function Home ( {navigation} ) {
  return (
    <SafeAreaView>
        <TouchableOpacity onPress={() => {
          navigation.navigate('AddressInput')
        }}>
          <Text>Hello from Home screen</Text>
        </TouchableOpacity>
    </SafeAreaView>
  );
}


// <TouchableOpacity onPress={() => {
//   navigation.navigate('AddressInput')
// }}>
//   <Text>Hello from Home screen</Text>
// </TouchableOpacity>