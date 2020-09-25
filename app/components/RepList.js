import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList, TouchableOpacity} from 'react-native';

export default function RepList ({ reps, navigation }) {

  return (
    <SafeAreaView >


      <FlatList
        data={reps.slice(2, 5)}
        keyExtractor={rep => rep.name}
        renderItem={({item}) => {
          console.log(item.name);
          return (<TouchableOpacity onPress={() => navigation.navigate('Rep', item)}>
            <Text>{item.name}</Text>
          </TouchableOpacity>)
        }}
      />

    </SafeAreaView>
  );
}