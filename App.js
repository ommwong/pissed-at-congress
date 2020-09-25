import React, { useEffect, useState } from 'react';
import Home from './app/screens/Home';
import AddressInput from './app/screens/AddressInput';
import Rep from './app/screens/Rep'
import RepList from './app/components/RepList'
import { getRepByAddress, getSenate, getHouse } from './ApiService';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();


export default function App() {

  const [ reps, setReps ] = useState([]);
  // const [ house, getHouse ] = useState([]);
  // const [ senate, getSenate ] = useState([]);

  const getReps = (line1, city, state, zip) => {
    getRepByAddress(line1, city, state, zip)
      .then(results => setReps(results.officials))
  }

  // useEffect(() => {
  //   getSenate()
  //     .then(senate => getSenate(senate.results))
  //   getHouse()
  //     .then(house => getHouse(house.results))
  // }, [])

  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen name="Home" component={Home} />

        <Stack.Screen name="AddressInput">
          {props => (
            <AddressInput getReps={getReps} {...props} />
          )}
        </Stack.Screen>

        <Stack.Screen name="RepList">
          {props => (
            <RepList reps={reps} {...props} />
          )}
        </Stack.Screen>

        <Stack.Screen name="Rep">
          {props => (
            <Rep rep={props} {...props} />
          )}
        </Stack.Screen>

      </Stack.Navigator>


    </NavigationContainer>

  );
}

