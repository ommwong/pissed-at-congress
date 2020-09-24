import React from 'react';
import WelcomeScreen from './app/screens/WelcomeScreen';
import AddressInput from './app/screens/AddressInput';
import GetReps from './app/screens/GetReps'
import { SafeAreaView } from 'react-native';


export default function App() {
  return (
    <SafeAreaView>
      <AddressInput></AddressInput>
      <GetReps></GetReps>
    </SafeAreaView>
  );
}

