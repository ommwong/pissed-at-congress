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

      {/* <View style={styles.homeButton}>
        <TouchableOpacity onPress={() => {
        navigation.navigate('Home')
        }}>
          <Image source={logo1} style={{height: 100, width: 100}}></Image>
        </TouchableOpacity>
      </View> */}

          <View>
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

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDFFFC',
    justifyContent: 'center'
  },
  homeButton: {
  },
  input: {
    flex: 3
  },
  input: {
    fontSize: 20,
    padding: 5,
    paddingLeft: 5,
    color: '#020100'
  },
  searchArea: {
    alignSelf: 'center',
    width: '100%',
    backgroundColor: '#FDFFFC',
    top: '3%',
    paddingBottom: 20,
    paddingTop: 5,
    borderRadius: 25,
  },
  searchBox: {
    marginTop: 20
  },
  searchItem: {

  },
  image: {
    height: 260,
    width: 260,
    borderRadius: 150,
    margin: 0,
    marginBottom: 10
  }

})