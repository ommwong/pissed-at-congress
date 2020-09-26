import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList, TouchableOpacity, Image } from 'react-native';
import Autocomplete from 'react-native-autocomplete-input';


export default function RepMenu ({ senators }) {

  const [ query, setQuery ] = useState('');

  const findSenator = (query, senators) => {
    if (query === '') {
      return [];
    }
    const firstName = senators.map(sen => sen.first_name);
    const lastName = senators.map(sen => sen.last_name);
    return `${firstName}${lastName}`
  }

  return (

    <SafeAreaView >

    <Text>This is the RepMenu</Text>


    </SafeAreaView>
  );
}


// <Autocomplete
// autoCapitalize="none"
// autoCorrect={false}
// data={findSenator(query, senators)}
// defaultValue={query}
// onChangeText={input => setQuery(input)}
// placeholder="Enter name"
// renderItem={({ item }) => (
//   <TouchableOpacity onPress={() => setQuery(item.first_name, item.last_name)}>
//     <Text>
//       {item.first_name} {item.last_name}
//     </Text>
//   </TouchableOpacity>
// )}
// />
