import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList, TouchableOpacity, Image, Dimensions } from 'react-native';
import dem from '../../assets/dem.png';
import gop from '../../assets/gop.png';
const { width, height } = Dimensions.get('window');

export default function RepList ({ reps, navigation }) {

  const spacing = 20;
  const item_size = width * .9;

  return (
    <SafeAreaView style={styles.container}>

      <FlatList
        showsHorizontalScrollIndicator={false}
        data={reps.slice(2, 5)}
        keyExtractor={rep => rep.name}
        horizontal
        contentContainerStyle={{
          alignItems: 'center'
        }}
        renderItem={({item}) => {
          return (
          <View>
            <View >
            <TouchableOpacity onPress={() => navigation.navigate('Rep', item )}>

                <View style={{ width: item_size }}>
                  <View style={{
                    backgroundColor: 'gold',
                    alignItems: 'center',
                    borderRadius: 40,
                    padding: spacing * 2.3,
                    marginHorizontal: spacing
                  }}>
                    {item.photoUrl !== undefined
                      ? <Image style={{height: 250, width: 250, borderRadius: 25}} source={{uri: item.photoUrl}}/>
                      : item.party.includes('Democratic Party')
                        ? <Image style={{height: 250, width: 250, borderRadius: 25}} source={dem} />
                        : <Image style={{height: 250, width: 250, borderRadius: 25}} source={gop} />
                    }
                  </View>

                  <View style={{alignItems: 'center'}}>
                    <Text style={{
                      fontSize: 20,
                      padding: 20,
                      textTransform: 'uppercase',
                      fontWeight: 'bold'
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
    flex: 1
  }
})