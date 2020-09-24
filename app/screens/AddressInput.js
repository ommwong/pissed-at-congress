import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, Button } from 'react-native';
import GoogleAutoPlaces from './GoogleAutoPlaces';
// import { getAddress } from '../../ApiService'

export default function AddressInput() {

  const [line1, setLine1] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zip, setZip] = useState('');

  function handleChange (input, stateName) {
    switch(stateName) {
      case stateName === 'line1':
        return setLine1(input)
      case stateName === 'city' :
        return setCity(input)
      case stateName === 'state' :
        return setState(input)
      case stateName === 'zip' :
        return setState(input)
    }
  }

  function handleSubmit (input) {
    // getAddress(line1, city, state, zip)

    if (input) {
      setLine1('');
      setCity('');
      setState('');
      setZip('');
    }
  }

  return (

    <SafeAreaView>

      <Text style={styles.addressHeader}>What is your address?</Text>

        <TextInput
          style={styles.addressInput}
          defaultValue={line1}
          autoCapitalize='words'
          onChangeText={text => {handleChange(text, line1)}}
          placeholder='Street Address'
          >
        </TextInput>

        <TextInput
          style={styles.addressInput}
          defaultValue={city}
          onChangeText={text => {handleChange(text, city)}}
          placeholder='City'
          >
        </TextInput>

        <TextInput
          style={styles.addressInput}
          defaultValue={state}
          onChangeText={text => {handleChange(text, state)}}
          placeholder='State'
          >
        </TextInput>

        <TextInput
          style={styles.addressInput}
          defaultValue={zip}
          onChangeText={text => {handleChange(text, zip)}}
          placeholder='Zip Code'
          >
        </TextInput>


        <Button
          style={styles.button}
          title='Continue'
          onPress = {(input) => {handleSubmit(input)}}
        />

    </SafeAreaView>
  )

};

const styles = StyleSheet.create({
  addressHeader: {
    height: 40,
    fontWeight: 'bold'
  },
  addressInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1
  },
  button: {

  },
  google: {
    backgroundColor: 'rgba(0,0,0,0)',
    borderTopWidth: 0,
    borderBottomWidth: 0,
  },
  googleTest: {
    marginLeft: 0,
    marginRight: 0,
    height: 38,
    color: '#5d5d5d',
    fontSize: 16,
  }
});

