import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { getSenate, getRepByAddress } from '../../ApiService';
import Reps from './Reps'

export default function RepList() {

  const [ reps, setReps ] = useState([]);

  useEffect(() => {
    getSenate()
      .then(results => setReps(results))
    // getRepByAddress()
    //   .then(results => console.log(results))
  }, [])

  console.log(reps)

  return (
    <SafeAreaView >
      <Text>Hello from RepList!</Text>

      <Reps></Reps>

    </SafeAreaView>


  );
}