import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

export default function Results( {rep} ) {


  return (
    <SafeAreaView>

      <Text onPress={()=>{alert('Hello')}}>
        {rep.name}
      </Text>

    </SafeAreaView>
  )

}