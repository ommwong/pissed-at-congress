import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, Button } from 'react-native';


export default function AddressInput() {

  const [ address, setAddress ] = useState({
    line1: '',
    city: '',
    state: '',
    zip: ''
  })

  function handleChange (event) {
    const value = event.target.value;

    setAddress({
      ...address,
      [event.target.value]: value
    })
  }

  function handleSubmit (event) {
    //google api function here
    setAddress({
      line1: '',
      city: '',
      state: '',
      zip: ''
    })
  }

  return (
    <SafeAreaView>
      <Text style={styles.addressHeader}>What is your address?</Text>
        <TextInput
          style={styles.addressInput}
          defaultValue={address.line1}
          onChange={() => {}}
          onSubmitEditing={() => {}}
          placeholder='Street Address'
          >
        </TextInput>

        <TextInput
          style={styles.addressInput}
          defaultValue={address.city}
          onChange={() => {}}
          onSubmitEditing={() => {}}
          placeholder='City'
          >
        </TextInput>

        <TextInput
          style={styles.addressInput}
          defaultValue={address.state}
          onChange={() => {}}
          onSubmitEditing={() => {}}
          placeholder='State'
          >
        </TextInput>

        <TextInput
          style={styles.addressInput}
          defaultValue={address.zip}
          onChange={() => {}}
          onSubmitEditing={() => {}}
          placeholder='Zip Code'
          >
        </TextInput>

        <Button
          title='Continue'
          onPress = {() => {}}
        />

    </SafeAreaView>
  )

}

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
});

