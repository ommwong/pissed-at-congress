import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList } from 'react-native';

export default function Results( {rep} ) {

  console.log(rep)

  return (
    <SafeAreaView>

      <Text>
        {rep.name}
        {rep.party}
      </Text>

    </SafeAreaView>
  )

}