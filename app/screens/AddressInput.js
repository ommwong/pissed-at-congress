import React, { useState } from 'react';
import { StyleSheet, Text, SafeAreaView, TextInput, Button, TouchableOpacity } from 'react-native';

export default function AddressInput( {getReps, navigation} ) {

  const [line1, setLine1] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zip, setZip] = useState('');


  function handleChange (input, stateName) {

    console.log(input, stateName)

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
  }

  return (

    <SafeAreaView>

      <Text style={styles.addressHeader}>What is your address?</Text>

        <TextInput
          style={styles.addressInput}
          value={line1}
          onChangeText={text => {handleChange(text, 'line1')}}
          placeholder='Street Address'
        />

        <TextInput
          style={styles.addressInput}
          value={city}
          onChangeText={text => {handleChange(text, 'city')}}
          placeholder='City'
        />

        <TextInput
          style={styles.addressInput}
          value={state}
          onChangeText={text => {handleChange(text, 'state')}}
          placeholder='State'
        />

        <TextInput
          style={styles.addressInput}
          value={zip}
          onChangeText={text => {handleChange(text, 'zip')}}
          placeholder='Zip Code'
        />

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

