import React, { useRef } from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList, TouchableOpacity, Image, Dimensions, Animated } from 'react-native';
import dem from '../../assets/dem.png';
import gop from '../../assets/gop.png';
import logo1 from '../../assets/logo1.png';

const { width, height } = Dimensions.get('window');

export default function RepList ({ reps, navigation }) {

  const spacing = 20;
  const item_size = width * .9;
  const scrollX = useRef(new Animated.Value(0)).current;

  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.homeButton}>
        <TouchableOpacity onPress={() => {
        navigation.navigate('AddressInput')
        }}>
          <Image source={logo1} style={{height: 100, width: 100}}></Image>
        </TouchableOpacity>
      </View>

      <Animated.FlatList
        showsHorizontalScrollIndicator={false}
        data={reps.slice(2, 5)}
        keyExtractor={rep => rep.name}
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
            <View >
            <TouchableOpacity onPress={() => navigation.navigate('Rep', item )}>

                <View style={{ width: item_size }}>
                  <Animated.View style={{
                    backgroundColor: '#FDFFFC',
                    alignItems: 'center',
                    borderRadius: 40,
                    padding: spacing * 2.3,
                    marginHorizontal: spacing,
                    transform: [{ translateY }]
                  }}>
                    {item.photoUrl !== undefined
                      ? <Image style={styles.image} source={{uri: item.photoUrl}}/>
                      : item.party.includes('Democratic Party')
                        ? <Image style={styles.image} source={dem} />
                        : <Image style={styles.image} source={gop} />
                    }
                  </Animated.View>

                  <View style={{alignItems: 'center', margin: 3}}>
                    <Text style={{
                      fontSize: 20,
                      padding: 20,
                      textTransform: 'uppercase',
                      fontWeight: 'bold',
                      color: '#020100'
                      }}>
                        {item.name}
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
    backgroundColor: '#FDFFFC'
  },
  image: {
    height: 300,
    width: 300,
    borderRadius: 25,
    margin: 0,
    marginBottom: 10
  },
  homeButton: {
    paddingRight: 1,
    flexDirection: 'row'
  }
})