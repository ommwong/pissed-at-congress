import React, {useState, useEffect} from 'react';
import WelcomeScreen from './app/screens/WelcomeScreen';
import AddressInput from './app/screens/AddressInput';
import RepList from './app/screens/RepList'
import { SafeAreaView } from 'react-native';
import { getRepByAddress } from './ApiService';


export default function App() {

  const [ reps, setReps ] = useState([]);

  const getReps = (line1, city, state, zip) => {
    getRepByAddress(line1, city, state, zip)
      .then(results => setReps(results.officials))
  }

  return (
    <SafeAreaView>
      <AddressInput getReps={getReps}></AddressInput>
      <RepList reps={reps}></RepList>
    </SafeAreaView>
  );
}

