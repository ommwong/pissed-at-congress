import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Home from './app/screens/Home';
import AddressInput from './app/screens/AddressInput';
import Results from './app/screens/Results'
import RepList from './app/components/RepList'
import { getRepByAddress } from './ApiService';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();


export default function App() {

  const [ reps, setReps ] = useState([]);

  const getReps = (line1, city, state, zip) => {
    getRepByAddress(line1, city, state, zip)
      .then(results => setReps(results.officials))
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="AddressInput">
          {props => (
            <AddressInput getReps={getReps} {...props} />
          )}
        </Stack.Screen>
        <Stack.Screen name="Results" component={Results}/>
      </Stack.Navigator>

      <View>
        <RepList reps={reps}></RepList>

      </View>
    </NavigationContainer>

  );
}

