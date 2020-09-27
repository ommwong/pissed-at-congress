import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList, TouchableOpacity, Image } from 'react-native';
import dem from '../../assets/dem.png';
import gop from '../../assets/gop.png';

export default function RepList ({ reps, navigation }) {

  return (
    <SafeAreaView >

      <FlatList

        data={reps.slice(2, 5)}
        keyExtractor={rep => rep.name}
        renderItem={({item}) => {

          return (<TouchableOpacity onPress={() => navigation.navigate('Rep', item )}>

            <Text>{item.name}</Text>

            {item.photoUrl !== undefined
              ? <Image style={{height: 200, width: 200}} source={{uri: item.photoUrl}}/>
              : item.party.includes('Democratic Party')
                ? <Image style={{height: 200, width: 200}} source={dem} />
                : <Image style={{height: 200, width: 200}} source={gop} />
            }

          </TouchableOpacity>)
        }}
      />

    </SafeAreaView>
  );
}