import React from 'react';
import { SafeAreaView, Text, TouchableOpacity } from 'react-native';

export default function Home ( {navigation} ) {
  return (
    <SafeAreaView>
        <TouchableOpacity onPress={() => {
          navigation.navigate('AddressInput')
        }}>
          <Text>Search by Address</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {
          navigation.navigate('SenateSearch')
        }}>
          <Text>Search by Name</Text>
        </TouchableOpacity>

    </SafeAreaView>
  );
}

