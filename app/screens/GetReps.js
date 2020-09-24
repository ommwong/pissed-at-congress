import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { getRepByAddress } from '../../ApiService';
import RepList from './RepList'

export default function GetReps({reps}) {


  // useEffect(() => {
  //   getRepByAddress(input)
  //     .then(results => setReps(results.officials))
  // }, [])

  return (
    <SafeAreaView >

      <RepList reps={reps}></RepList>

    </SafeAreaView>

  );
}