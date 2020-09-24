import React from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const GoogleAutoPlaces = () => {
  return (
    <GooglePlacesAutocomplete
      placeholder='Search'
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        console.log(data, details);
      }}
      query={{
        key: 'AIzaSyAgcguYWQBmTmoc49ZxiMM4myA6q27cEso',
        language: 'en',
      }}
    />
  );
};

export default GoogleAutoPlaces;



//{/* <GooglePlacesAutocomplete */}
        {/* // placeholder='Start typing your address'
        // // minLength={2}
        // // autoFocus={false}
        // // fetchDetails={true}
        // // getDefaultValue={() => { */}
        {/* // //   return '';
        // // }}
        // onPress={(data, details = null) => { */}
        {/* //   console.log(data, details)
        // }}
        // query={{ */}
        {/* //   key: 'AIzaSyAgcguYWQBmTmoc49ZxiMM4myA6q27cEso',
        //   language: 'en',
        //   // types: 'address',
        //   // components: 'country:us'
        // }}
        // onSubmitEditing={()=>console.log('hi')}
        // getAddressText={() => {setAddress({ */}

        {/* // })
      // }}
        // /> */}

        // <GoogleAutoPlaces/>