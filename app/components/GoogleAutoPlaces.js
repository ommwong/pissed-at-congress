import React from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const GoogleAutoPlaces = () => {

  const pressHander = (data, details = null) => {
    navigation.goBack();
  };

  return (
    <GooglePlacesAutocomplete
    placeholder='Search'
    minLength={2} // minimum length of text to search
    autoFocus
    returnKeyType="search" // Can be left out for default return key https://facebook.github.io/react-native/docs/textinput.html#returnkeytype
    keyboardAppearance='light' // Can be left out for default keyboardAppearance https://facebook.github.io/react-native/docs/textinput.html#keyboardappearance
    listViewDisplayed='auto' // true/false/undefined
    fetchDetails
    renderDescription={row => row.description} // custom description render
    onPress={pressHander}

    getDefaultValue={() => ''}

    query={{
      // available options: https://developers.google.com/places/web-service/autocomplete
      key: 'AIzaSyAgcguYWQBmTmoc49ZxiMM4myA6q27cEso',
      language: 'en', // language of the results
    }}

    styles={{
      textInputContainer: {
        width: '100%'
      },
      description: {
        fontWeight: 'bold'
      },
      predefinedPlacesDescription: {
        color: '#1faadb'
      }
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