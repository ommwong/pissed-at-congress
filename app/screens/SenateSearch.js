import React, { useState } from 'react';
import { StyleSheet, Text, SafeAreaView, TextInput, TouchableOpacity, FlatList, Image } from 'react-native'
import { handleSearchName } from '../../handleSearchName';

export default function SenateSearch ({ senatorsList, navigation }) {

  const list = senatorsList;

  const [ searchResult, setSearchResult ] = useState([]);
  const [ query, setQuery ] = useState('');

  handleSearchName(input);

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
        keyExtractor={rep => rep.id}
        renderItem={({item}) => {
          return (
            <TouchableOpacity onPress={() => navigation.navigate('Rep', item)}>
              <Text>{item.first_name} {item.last_name}</Text>
              <Image style={{height: 200, width: 200}} source={{uri: `http://bioguide.congress.gov/bioguide/photo/${item.id.charAt(0)}/${item.id}.jpg`}} />
            </TouchableOpacity>
            )
        }}
      />

    </SafeAreaView>
  );
}

