import React from 'react';
import WelcomeScreen from './app/screens/WelcomeScreen';
import AddressInput from './app/screens/AddressInput';
import RepList from './app/screens/RepList'
import { SafeAreaView } from 'react-native';


export default function App() {
  return (
    <SafeAreaView>
      <AddressInput></AddressInput>
      <RepList></RepList>
    </SafeAreaView>
  );
}

