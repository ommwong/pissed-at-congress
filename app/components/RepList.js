import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList } from 'react-native';
import Results from '../screens/Results'

export default function RepList ({ reps }) {

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