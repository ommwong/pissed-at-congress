import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { getRepByAddress } from '../../ApiService';
import RepList from './RepList'

export default function GetReps() {

  const [ reps, setReps ] = useState([]);

  useEffect(() => {
    getRepByAddress()
      .then(results => setReps(results.officials))
  }, [])

  return (
    <SafeAreaView >
      <Text>Hello from GetReps!</Text>

      <RepList reps={reps}></RepList>

    </SafeAreaView>

  );
}