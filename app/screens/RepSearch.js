import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, TouchableOpacity, Image, FlatList } from 'react-native'

export default function RepSearch ({ senators, navigation }) {

  const [ searchResult, setSearchResult ] = useState([]);
  const [ query, setQuery ] = useState('');

  function handleSearchName (input) {
    console.log('input', input);

    const formatedQuery = input.slice(0).toUpperCase();

    setQuery(formatedQuery);

    const filteredResult = senators.filter(name => name.first_name.includes(input, formatedQuery) || name.last_name.includes(input, formatedQuery));

    setSearchResult(filteredResult);

  }

  return (
    <SafeAreaView>

    <TextInput
      placeholder='Enter a name'
      value={searchResult}
      autoCorrect={false}
      onChangeText={input => {handleSearchName(input)}}
      >
    </TextInput>

      <FlatList
        data={searchResult}
        keyExtractor={sen => sen.id}
        renderItem={({item}) => {
          return (
            <TouchableOpacity onPress={() => navigation.navigate('Rep', item)}>
              <Text>{item.first_name} {item.last_name}</Text>
            </TouchableOpacity>
            )
        }}
      />

    </SafeAreaView>
  );
}
