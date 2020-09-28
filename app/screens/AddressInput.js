import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, Image, TextInput, Button, TouchableOpacity, View, KeyboardAvoidingView } from 'react-native';
import address from '../../assets/address.png';


export default function AddressInput({ getReps, navigation }) {

  const [line1, setLine1] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zip, setZip] = useState('');

  function handleChange (input, stateName) {

    switch(stateName) {
      case 'line1' :
        return setLine1(input)
      case 'city' :
        return setCity(input)
      case 'state' :
        return setState(input)
      case 'zip' :
        return setZip(input)
    }
  }

  function handleSubmit (input) {
    getReps(line1, city, state, zip)

    if (input) {
      setLine1('');
      setCity('');
      setState('');
      setZip('');
    }
    navigation.navigate('RepList');
  }

  return (

    <KeyboardAvoidingView style={styles.container} behavior="padding">

      <View style={styles.top}></View>
      <View style={styles.middle}>

        <View style={styles.homeButton}>
          <TouchableOpacity onPress={() => {
          navigation.navigate('Home')
          }}>
            <Image source={address} style={{height: 45, width: 45}}></Image>
          </TouchableOpacity>
        </View>

        <Text style={styles.textContainer}> WHAT IS YOUR ADDRESS? </Text>

        <View style={styles.formArea}>
          <View style={styles.mainForm}>
            <View style={styles.formItems}>
              <TextInput
                style={styles.input}
                placeholder='Street Address'
                value={line1}
                onChangeText={text => {handleChange(text, 'line1')}}
              >
              </TextInput>

              <TextInput
                style={styles.input}
                placeholder='City'
                value={city}
                onChangeText={text => {handleChange(text, 'city')}}
              >
              </TextInput>

              <TextInput
                style={styles.input}
                placeholder='State'
                value={state}
                onChangeText={text => {handleChange(text, 'state')}}
              >
              </TextInput>

              <TextInput
                style={styles.input}
                placeholder='Zip Code'
                value={zip}
                onChangeText={text => {handleChange(text, 'zip')}}
              >
              </TextInput>
            </View>
          </View>
        </View>

        <View style={styles.continue}>
          <TouchableOpacity>
            { line1, city, state, zip !== ''
             ? <Button
              title='CONTINUE'
              onPress = {(input) => {handleSubmit(input)}}
              color="#020100"/>
              : null }
            </TouchableOpacity>
        </View>

          <View style={styles.navigation}>
            <TouchableOpacity onPress={() => {
            navigation.navigate('Home')
            }}>
              <Image source={address} style={{height: 45, width: 45}}></Image>
            </TouchableOpacity>
          </View>

      </View>

      <View style={styles.bottom}></View>


    </KeyboardAvoidingView>

  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative'
  },
  top: {
    position: 'relative',
    backgroundColor: '#F1D302',
    paddingRight: 13,
    paddingLeft: 13,
    height: 250,
    flex: 1
  },
  middle: {
    width: '100%',
    height: '100%',
    flex: 1,
    position: 'absolute',
    zIndex: 2,
    backgroundColor: 'transparent',
    paddingLeft: 30,
    paddingRight: 30,
    flex: 2
  },
  bottom: {
    position: 'relative',
    height: '100%',
    paddingRight: 20,
    paddingLeft: 20,
    backgroundColor: '#FDFFFC',
    flex: 1
  },
  textContainer: {
    color: '#020100',
    fontSize: 20,
    marginBottom: 20,
    position: 'relative',
    top: '2%',
    alignSelf: 'center',
    fontWeight: 'bold'
  },
  formArea: {
    alignSelf: 'center',
    width: '100%',
    backgroundColor: '#FDFFFC',
    top: '3%',
    paddingBottom: 40,
    paddingTop: 5,
    borderRadius: 25,
  },
  continue: {
    backgroundColor:'#F1D302',
    borderRadius: 45,
    borderColor: '#F1D302',
    marginLeft: 40,
    marginRight: 40
  },
  input: {
    fontSize: 20,
    padding: 20,
    paddingLeft: 25,
    color: '#020100'
  },
  formItems: {
    marginTop: 25
  },
  homeButton: {
    paddingTop: 5,
    paddingRight: 2
  },
  navigation: {
    flex: 0.3
  }
})