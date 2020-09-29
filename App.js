import React, { useState, useEffect } from 'react';
import Home from './app/screens/Home';
import AddressInput from './app/screens/AddressInput';
import Rep from './app/screens/Rep';
import RepList from './app/components/RepList';
import SenateSearch from './app/screens/SenateSearch';
import HouseSearch from './app/screens/HouseSearch';
import Loading from './app/components/Loading';
import PickerComponent from './app/screens/PickerComponent';
import { getRepByAddress, getSenate, getHouse } from './ApiService';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();

export default function App() {

  const [ reps, setReps ] = useState([]);
  const [ senators, setSenators ] = useState([]);
  const [ houseReps, setHouseReps ] = useState([]);

  useEffect(() => {
    getSenate()
    .then(list => list.results.map(senate => setSenators(senate.members)))
  }, [])


  useEffect(() => {
    getHouse()
    .then(list => list.results.map(house => setHouseReps(house.members)))
  }, [])

  const getReps = (line1, city, state, zip) => {
    getRepByAddress(line1, city, state, zip)
      .then(results => setReps(results.officials))
  };

  if (senators.length === 0) {
    return <Loading />
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>

        <Stack.Screen name="SenateSearch" options={{headerShown: false}}>
          {props => (
            <SenateSearch senators={senators} {...props} />
          )}
        </Stack.Screen>

        <Stack.Screen name="HouseSearch">
          {props => (
            <HouseSearch houseReps={houseReps} {...props} />
          )}
        </Stack.Screen>

        {/* <Stack.Screen name="SenateSearch" component={SenateSearch} />

        <Stack.Screen name="HouseSearch" component={HouseSearch} /> */}

        <Stack.Screen name="AddressInput" options={{headerShown: false}}>
          {props => (
            <AddressInput getReps={getReps} {...props} />
          )}
        </Stack.Screen>

        <Stack.Screen name="RepList" options={{headerShown: false}}>
          {props => (
            <RepList reps={reps} {...props} />
          )}
        </Stack.Screen>

        <Stack.Screen name="Rep" options={{headerShown: false}}>
          {props => (
            <Rep {...props} />
          )}
        </Stack.Screen>

      </Stack.Navigator>

    </NavigationContainer>

  );
}

