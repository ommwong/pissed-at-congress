import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Results from './Results'

export default function RepList({ reps }) {

  return (
    <SafeAreaView >

      {reps
        .slice(2, 5)
        .map(rep =>
          <Results
            rep={rep}
          />
      )}

    </SafeAreaView>

  );
}