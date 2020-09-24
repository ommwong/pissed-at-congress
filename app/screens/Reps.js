import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Results from './Results'

export default function Reps({reps}) {

  console.log(reps)

  return (
    <SafeAreaView >

      {/* {reps
        .map(rep =>
          <Results
            rep={rep}
          />
      )} */}

    </SafeAreaView>


  );
}