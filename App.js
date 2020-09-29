import React, { useState, useEffect } from 'react';
import Home from './app/screens/Home';
import AddressInput from './app/screens/AddressInput';
import Rep from './app/screens/Rep';
import RepList from './app/components/RepList';
import SenateSearch from './app/screens/SenateSearch';
import HouseSearch from './app/screens/HouseSearch';
import Login from './app/screens/Login';
import Loading from './app/components/Loading';
import Register from './app/screens/Register';
// import PickerComponent from './app/screens/PickerComponent';
import { getRepByAddress, getSenate, getHouse, register, login } from './ApiService';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();

export default function App() {

  const [ reps, setReps ] = useState([]);
  const [ senators, setSenators ] = useState([]);
  const [ houseReps, setHouseReps ] = useState([]);
  const [ isAuthenticated, setIsAuthenticated ] = useState(false);

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

  const registerUser = (name, username, password) => {
    register({name, username, password})
      .then(event => console.log('successful'))
  }

  const loginUser = (username, password) => {
    login({username, password})
      .then(event => console.log('Login successful'))
  }

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

        <Stack.Screen name="AddressInput" options={{headerShown: false}}>
          {props => (
            <AddressInput getReps={getReps} {...props} />
          )}
        </Stack.Screen>

        <Stack.Screen name="Register" options={{headerShown: false}}>
          {props => (
            <Register registerUser={registerUser} setIsAuthenticated={setIsAuthenticated} {...props} />
          )}
        </Stack.Screen>

        <Stack.Screen name="Login" options={{headerShown: false}}>
          {props => (
            <Login loginUser={loginUser} setIsAuthenticated={setIsAuthenticated} {...props} />
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

