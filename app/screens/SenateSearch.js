import React, { useState, useRef } from 'react';
import { StyleSheet, Text, SafeAreaView, TextInput, TouchableOpacity, FlatList, Image, View, Animated, Dimensions } from 'react-native'
import { handleSearchName } from '../../handleSearchName';
import logo1 from '../../assets/logo1.png';

const { width, height } = Dimensions.get('window');


export default function SenateSearch ({ senators, navigation }) {

  const [ searchResult, setSearchResult ] = useState([]);
  const [ query, setQuery ] = useState('');

  const spacing = 20;
  const item_size = width * .9;
  const scrollX = useRef(new Animated.Value(0)).current;

  function handleSearchName (input) {

    const formatedQuery = input.slice(0).toUpperCase();

    setQuery(formatedQuery);

    const filteredResult = senators.filter(name => name.first_name.includes(input, formatedQuery) || name.last_name.includes(input, formatedQuery));

    setSearchResult(filteredResult);

  };

  return (

    <SafeAreaView style={styles.container}>

      <View style={styles.homeButton}>
        <TouchableOpacity onPress={() => {
        navigation.navigate('AddressInput')
        }}>
          <Image source={logo1} style={{height: 100, width: 100}}></Image>
        </TouchableOpacity>
      </View>

      <View style={styles.input}>
        <TextInput
          placeholder='Enter a name'
          value={searchResult}
          autoCorrect={false}
          onChangeText={input => {handleSearchName(input)}}
          >
        </TextInput>
      </View>

      <Animated.FlatList
        showsHorizontalScrollIndicator={false}
        data={searchResult}
        keyExtractor={rep => rep.id}
        horizontal
        contentContainerStyle={{
          alignItems: 'center'
        }}
        snapToInterval={item_size}
        decelerationRate={0}
        bounces={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: true }
        )}
        scrollEventThrottle={15}
        renderItem={({item, index}) => {
          const inputRange= [
            (index - 1) * item_size, //previous
            index * item_size,       //current
            (index + 1) * item_size  //next
          ];
          const translateY = scrollX.interpolate({
            inputRange,
            outputRange: [0, -50, 0]
          })

          return (
            <View>
              <View>
                <TouchableOpacity onPress={() => navigation.navigate('Rep', item)}>
                  <View style={{ width: item_size }}>

                    <Animated.View style={{
                      backgroundColor: '#FDFFFC',
                      alignItems: 'center',
                      borderRadius: 40,
                      padding: spacing * 2.3,
                      marginHorizontal: spacing,
                      transform: [{ translateY }]
                    }}>
                      <Image style={{height: 200, width: 200}} source={{uri: `http://bioguide.congress.gov/bioguide/photo/${item.id.charAt(0)}/${item.id}.jpg`}} />
                    </Animated.View>

                    <View style={{alignItems: 'center', margin: 3}}>
                      <Text style={{
                        fontSize: 20,
                        padding: 20,
                        textTransform: 'uppercase',
                        fontWeight: 'bold',
                        color: '#020100'
                        }}>
                          {item.first_name} {item.last_name}
                      </Text>
                    </View>

                  </View>
                </TouchableOpacity>
              </View>
            </View>

            )
        }}
      />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDFFFC'
  },
  homeButton: {
  },
  input: {
    flex: 3
  },
  input: {
    fontSize: 20,
    padding: 20,
    paddingLeft: 25,
    color: '#020100'
  },
  searchArea: {
    alignSelf: 'center',
    width: '100%',
    backgroundColor: '#FDFFFC',
    top: '3%',
    paddingBottom: 40,
    paddingTop: 5,
    borderRadius: 25,
  },
  searchBox: {
    marginTop: 25
  },
  searchItem: {

  }
})