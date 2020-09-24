import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

export default function Results( {rep} ) {


  return (
    <SafeAreaView>

      <Text>
        {rep.name}
      </Text>

    </SafeAreaView>
  )

}