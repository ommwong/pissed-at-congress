// import React, { useState } from 'react';
// import { View } from 'react-native'
// import { Picker } from '@react-native-community/picker';
// import SenateSearch from './SenateSearch';
// import HouseSearch from './HouseSearch';


// export default function PickerComponent ({senators, houseReps}) {

//   const [ chamber, setChamber ] = useState('Senate');

//   const senatorsList = senators;
//   const houseList = houseReps;

//   return (

//     <View>

//       <Picker
//         onValueChange={(itemValue, itemIndex) => setChamber(itemValue)}
//         selectedValue = {chamber}
//         itemStyle={{height: 50, width: 100}}
//       >
//         <Picker.Item label='Senate' value='Senate' />
//         <Picker.Item label='House' value='House' />

//       </Picker>

//       {chamber === 'Senate'
//         ? <SenateSearch senatorsList={senatorsList}/>
//         : <HouseSearch houseList={houseList}/>
//       }

//     </View>
//   )

// }

