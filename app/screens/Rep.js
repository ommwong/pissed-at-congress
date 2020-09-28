import React, { useState } from 'react'
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

  const [ currentCard, setCurrentCard ] = useState(null);

  const rep = props.route.params;

  return (
    <View style={styles.container}>

      <StatusBar hidden/>

        <TouchableOpacity onPress={() => {setCurrentCard('name')}} style={styles.cardContainer} activeOpacity={0.9}>
          <View style={[styles.card, {backgroundColor: '#235789'}]}>
            <Text style={[styles.heading, {color: '#FDFFFC'}]}>
              Name
            </Text>
            {currentCard === 'name' && <View style={styles.subCategory}>
              <View>
              {rep.id
                ? <View>
                    <Image style={styles.photo} source={{uri: `http://bioguide.congress.gov/bioguide/photo/${rep.id.charAt(0)}/${rep.id}.jpg`}} />
                    <Text style={styles.info_name}> {rep.first_name} {rep.last_name} </Text>
                  </View>
                : <View>
                    {rep.photoUrl !== undefined
                    ? <Image style={styles.photo} source={{uri: rep.photoUrl}} />
                    : rep.party.includes('Democratic Party')
                        ? <Image style={styles.photo} source={dem} />
                        : <Image style={styles.photo} source={gop} />
                    }
                    <Text style={styles.info_name}> {rep.name} </Text>
                  </View>
              }
              </View>
            </View>}
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {setCurrentCard('info')}} style={styles.cardContainer} activeOpacity={0.9}>
          <View style={[styles.card, {backgroundColor: '#F1D302'}]}>
            <Text style={[styles.heading, {color: '#020100'}]}>
              Info
            </Text>
            {currentCard === 'info' && <View style={styles.subCategory}>
              <View>
              {rep.id
                ? <View>
                    {rep.party === 'D'
                      ? <Text style={styles.info_text}> Democratic Party, {rep.state} </Text>
                      : <Text style={styles.info_text}> Republican Party, {rep.state} </Text>
                    }
                    {rep.chamber === 'House'
                      ? <Text style={styles.info_text}> US House of Representatives </Text>
                      : <Text style={styles.info_text}> US Senate </Text>
                    }
                    <Text style={styles.info_text}> Next election: {rep.next_election} </Text>
                  </View>
                : <View>
                    {rep.party === 'Democratic Party'
                      ? <Text style={styles.info_text}> Democratic Party, CA </Text>
                      : <Text style={styles.info_text}> Republican Party, CA </Text>
                    }
                    {rep.urls.includes('house')
                      ? <Text style={styles.info_text}> US House of Representatives </Text>
                      : <Text style={styles.info_text}> US Senate </Text>
                    }
                </View>
              }
              </View>
            </View>}
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {setCurrentCard('takeAction')}} style={styles.cardContainer} activeOpacity={0.9}>
          <View style={[styles.card, {backgroundColor: '#C1292E'}]}>
            <Text style={[styles.heading, {color: '#FDFFFC'}]}>
              Take Action
            </Text>
            {currentCard === 'takeAction' && <View style={[styles.subCategory]}>
              <View>
              {rep.id
                ? <View>
                    <Text onPress={() => {callPhone(rep.phone)}} style={{color: '#FDFFFC'}}> {rep.phone} </Text>
                  </View>

                : <View>
                    <Text onPress={() => {callPhone(rep.phones)}} style={{color: '#FDFFFC'}}> {rep.phones} </Text>
                </View>
              }
              </View>
            </View>}
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
    letterSpacing: 7
  },
  info_text:{
    color: '#020100',
    textTransform: 'uppercase',
    letterSpacing: 7,
    fontWeight: '900',
    fontSize: 15,
    lineHeight: 50,
    textAlign: 'center'
  },
  info_name: {
    color: '#FDFFFC',
    textTransform: 'uppercase',
    letterSpacing: 7,
    fontWeight: '900',
    fontSize: 20,
    lineHeight: 50,
    textAlign: 'center'
  },
  photo: {
    height: 150,
    width: 150,
    borderRadius: 100
  }
})