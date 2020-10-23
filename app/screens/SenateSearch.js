import React, { useState, useRef } from 'react';
import { StyleSheet, Text, SafeAreaView, TextInput, TouchableOpacity, Image, View, Animated, Dimensions } from 'react-native'
import logo1 from '../../assets/logo1.png';

const { width, height } = Dimensions.get('window');

export default function SenateSearch ({ senators, navigation }) {

  const [ searchResult, setSearchResult ] = useState([]);
  const [ query, setQuery ] = useState('');

  const spacing = 5;
  const item_size = width * 1;
  const scrollX = useRef(new Animated.Value(0)).current;

  function handleSearchName (input) {

    const formatedQuery = input.slice(0).toUpperCase();

    setQuery(formatedQuery);

    const filteredResult = senators.filter(name => name.first_name.includes(input, formatedQuery) || name.last_name.includes(input, formatedQuery));

    setSearchResult(filteredResult);

  };

  return (

    <SafeAreaView style={styles.container}>

          <View style={styles.searchArea}>
            <View style={styles.mainSearch}>
              <View style={styles.searchItem}>
                <TextInput
                  style={styles.input}
                  placeholder='Start typing'
                  value={searchResult}
                  autoCorrect={false}
                  onChangeText={input => {handleSearchName(input)}}
                  >
                </TextInput>
              </View>
            </View>
          </View>

        <View style={{flex: 4}}>

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

            const translateY = scrollX.interpolate({
              inputRange: [
                (index - 1) * item_size, //previous
                index * item_size,       //current
                (index + 1) * item_size  //next,
              ],
              outputRange: [75, -50, 75]
            })

            return (
              <View>
                <View>
                  <TouchableOpacity onPress={() => navigation.navigate('Rep', item)}>
                    <View style={{ width: item_size }}>

                      {item.party === 'D'
                      ? <Animated.View style={{
                        backgroundColor: '#235789',
                        borderRadius: 250,
                        alignItems: 'center',
                        padding: spacing * 10,
                        marginHorizontal: spacing,
                        transform: [{ translateY }]
                      }}>
                        <Image style={styles.image} source={{uri: `http://bioguide.congress.gov/bioguide/photo/${item.id.charAt(0)}/${item.id}.jpg`}} />
                      </Animated.View>

                      : <Animated.View style={{
                        backgroundColor: '#C1292E',
                        borderRadius: 250,
                        alignItems: 'center',
                        padding: spacing * 10,
                        marginHorizontal: spacing,
                        transform: [{ translateY }]
                      }}>
                        <Image style={styles.image} source={{uri: `http://bioguide.congress.gov/bioguide/photo/${item.id.charAt(0)}/${item.id}.jpg`}} />
                      </Animated.View>
                      }

                      <View style={{alignItems: 'center', margin: 3}}>
                        <Text style={{
                          color: '#020100',
                          textTransform: 'uppercase',
                          letterSpacing: 7,
                          fontWeight: '900',
                          fontSize: 25,
                          textAlign: 'center'
                          }}>
                            {item.first_name} {item.last_name}
                        </Text>
                      </View>

                    </View>
                  </TouchableOpacity>
                </View>
              </View>)
          }}
      />

        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDFFFC',
    justifyContent: 'center'
  },
  image: {
    height: 260,
    width: 260,
    borderRadius: 150,
    margin: 0,
    marginBottom: 10
  },
  searchArea: {
    flex: 0.5,
    backgroundColor: '#F1D302',
    borderRadius: 100,
  },
  mainSearch: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingTop: 9
  },
  searchItem: {
    backgroundColor: '#FDFFFC',
    paddingBottom: 5,
    paddingRight: 80,
    paddingLeft: 80,
    borderRadius: 40,
    paddingTop: 10,
    paddingBottom: 10
  },
  input: {
    color: '#020100',
    paddingTop: 5,
    paddingBottom: 5,
    fontSize: 20,
    color: '#020100',
    letterSpacing: 4,
    textAlign: 'center',
    fontWeight: '600',
  }
})