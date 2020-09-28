import React from 'react'
import { Text, TouchableOpacity, View, Image, StyleSheet } from 'react-native';
import * as Linking from 'expo-linking';
import * as Sharing from 'expo-sharing'; //SHARING
import dem from '../../assets/dem.png';
import gop from '../../assets/gop.png';
import { StatusBar } from 'expo-status-bar';

const callPhone = (number) => {
  Linking.openURL(`tel:+1${number}`)
};

const shareRep = () => {
  if (!( Sharing.isAvailableAsync())) {
    alert('Damn, it does not work');
    return;
  }
  Sharing.shareAsync() //add local file
}

export default function Rep ( props ) {

  const rep = props.route.params;

  const data = [
    {
      bg: 'dodgerblue',
      color: 'red',
      category: 'Name',
    },
    {
      bg: 'coral',
      color: 'green',
      category: 'Info',
    },
    {
      bg: 'red',
      color: 'black',
      category: 'Take Action',
    },
  ]

  return (
    <View style={styles.container}>
      <StatusBar hidden/>


        <TouchableOpacity onPress={() => {}} style={styles.cardContainer}>
          <View style={[styles.card, {backgroundColor: 'coral'}]}>
            <Text style={[styles.heading, {color: 'black'}]}>
              Name
            </Text>
            <View style={styles.subCategory}>
              <View>
              {rep.id
                ? <View>
                    <Image style={{height: 200, width: 200}} source={{uri: `http://bioguide.congress.gov/bioguide/photo/${rep.id.charAt(0)}/${rep.id}.jpg`}} />
                    <Text> {rep.first_name} {rep.last_name} </Text>
                  </View>
                : <View>
                    {rep.photoUrl !== undefined
                    ? <Image style={{height: 200, width: 200}} source={{uri: rep.photoUrl}} />
                    : rep.party.includes('Democratic Party')
                        ? <Image style={{height: 200, width: 200}} source={dem} />
                        : <Image style={{height: 200, width: 200}} source={gop} />
                    }
                    <Text> {rep.name} </Text>
                  </View>
              }
              </View>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {}} style={styles.cardContainer}>
          <View style={[styles.card, {backgroundColor: 'dodgerblue'}]}>
            <Text style={[styles.heading, {color: 'black'}]}>
              Info
            </Text>
            <View style={styles.subCategory}>
              <View>
              {rep.id
                ? <View>
                    {rep.party === 'D'
                      ? <Text> Democratic Party, {rep.state} </Text>
                      : <Text> Republican Party, {rep.state} </Text>
                    }
                    {rep.chamber === 'House'
                      ? <Text> US House of Representatives </Text>
                      : <Text> US Senate </Text>
                    }
                    <Text> Next election: {rep.next_election} </Text>
                  </View>
                : <View>
                    {rep.party === 'Democratic Party'
                      ? <Text> Democratic Party, CA </Text>
                      : <Text> Republican Party, CA </Text>
                    }
                    {rep.urls.includes('house')
                      ? <Text> US House of Representatives </Text>
                      : <Text> US Senate </Text>
                    }
                </View>
              }
              </View>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {}} style={styles.cardContainer}>
          <View style={[styles.card, {backgroundColor: 'red'}]}>
            <Text style={[styles.heading, {color: 'black'}]}>
              Take Action
            </Text>
            <View style={styles.subCategory}>
              <View>
              {rep.id
                ? <View>
                    <Text onPress={() => {callPhone(rep.phone)}}> {rep.phone} </Text>
                  </View>

                : <View>
                    <Text onPress={() => {callPhone(rep.phones)}}> {rep.phones} </Text>
                </View>
              }
              </View>
            </View>
          </View>
        </TouchableOpacity>



    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDFFFC',
    justifyContent: 'center'
  },
  cardContainer: {
    flexGrow: 1
  },
  card: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  heading: {
    fontSize: 40,
    fontWeight: '900',
    textTransform: 'uppercase',
    letterSpacing: 2
  }
})