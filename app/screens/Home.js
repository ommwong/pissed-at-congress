import React from 'react';
import { SafeAreaView, Text, TouchableOpacity } from 'react-native';

export default function Home ( {navigation} ) {
  return (
    <SafeAreaView>
        <TouchableOpacity onPress={() => {
          navigation.navigate('AddressInput')
        }}>
          <Text>Go to AddressInput</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {
          navigation.navigate('RepSearch')
        }}>
          <Text>Go to RepSearch</Text>
        </TouchableOpacity>
    </SafeAreaView>
  );
}

