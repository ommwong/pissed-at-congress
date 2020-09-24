import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { getSenate, getRepByAddress } from '../../ApiService';
import Reps from './Reps'

export default function RepList() {

  const [ reps, setReps ] = useState([]);

  useEffect(() => {
    // getSenate()
    //   .then(list => setReps(list))
    getRepByAddress()
      .then(results => setReps(results.officials.slice(2, 5)))
  }, [])

  return (
    <SafeAreaView >
      <Text>Hello from RepList!</Text>

      <Reps reps={reps}></Reps>

    </SafeAreaView>


  );
}