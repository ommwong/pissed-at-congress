import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native'
import { Picker } from '@react-native-community/picker';

export default function PickerComponent ({ getSenateAPI, getHouseAPI }) {

  const [ chamber, setChamber ] = useState('Senate');

  chamber === 'Senate' ? getSenateAPI() : getHouseAPI();

  return (

    <View>

      <Picker
        onValueChange={(itemValue, itemIndex) => setChamber(itemValue)}
        selectedValue = {chamber}
        itemStyle={{height: 50, width: 100}}
      >
        <Picker.Item label='Senate' value='Senate' />
        <Picker.Item label='House' value='House' />

      </Picker>
{/*
      {chamber === 'Senate'
        ? <SenateSearch />
        : <HouseSearch />
      } */}

    </View>
  )

}

