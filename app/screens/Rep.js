import React from 'react'
import { SafeAreaView, Text, TouchableOpacity, View, Image } from 'react-native';
import * as Linking from 'expo-linking';
import * as Sharing from 'expo-sharing'; //SHARING
import dem from '../../assets/dem.png';
import gop from '../../assets/gop.png';

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

  return (

    <SafeAreaView>

      {rep.id
        ? <View>
            <Image style={{height: 200, width: 200}} source={{uri: `http://bioguide.congress.gov/bioguide/photo/${rep.id.charAt(0)}/${rep.id}.jpg`}} />
            <Text> {rep.first_name} {rep.last_name} </Text>
            {rep.party === 'D'
              ? <Text> Democratic Party, {rep.state} </Text>
              : <Text> Republican Party, {rep.state} </Text>
            }
            {rep.chamber === 'House'
              ? <Text> US House of Representatives </Text>
              : <Text> US Senate </Text>
            }
            <Text> Next election: {rep.next_election} </Text>
            <Text onPress={() => {callPhone(rep.phone)}}> {rep.phone} </Text>

          </View>

        : <View>
            {rep.photoUrl !== undefined
            ? <Image style={{height: 200, width: 200}} source={{uri: rep.photoUrl}} />
            : rep.party.includes('Democratic Party')
                ? <Image style={{height: 200, width: 200}} source={dem} />
                : <Image style={{height: 200, width: 200}} source={gop} />
            }
            <Text> {rep.name} </Text>
            {rep.party === 'Democratic Party'
              ? <Text> Democratic Party, CA </Text>
              : <Text> Republican Party, CA </Text>
            }
            {rep.urls.includes('house')
              ? <Text> US House of Representatives </Text>
              : <Text> US Senate </Text>
            }
            <Text onPress={() => {callPhone(rep.phones)}}> {rep.phones} </Text>

        </View>
      }

        <Text onPress={() => {shareRep()}}> SHARE REP </Text>

    </SafeAreaView>



  )
}

