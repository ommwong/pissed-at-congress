import React, { useState } from 'react';
import { StyleSheet, Text, Image, TextInput, Button, TouchableOpacity, View, KeyboardAvoidingView } from 'react-native';

export default function Login({ loginUser, setIsAuthenticated }) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleChange (input, stateName) {
    switch(stateName) {
      case 'email' :
        return setEmail(input)
      case 'password' :
        return setPassword(input)
    }
  }

  async function handleSubmit (input) {
    const res = await loginUser(email, password);

    if (res. error && input) {
      alert(`Wrong email or password!`)
      email('');
      password('');
    }
    const { accessToken } = res;
    localStorage.setItem('accessToken', accessToken);
    setIsAuthenticated(true);
    navigation.navigate('Home');
  }

  const validateForm = () => {
    return !email || !password;
  };

  return (

    <KeyboardAvoidingView style={styles.container} behavior="padding">

      <View style={styles.top}></View>
      <View style={styles.middle}>

        <Text style={styles.textContainer}> SIGN IN </Text>

        <View style={styles.formArea}>
          <View style={styles.mainForm}>
            <View style={styles.formItems}>
              <TextInput
                style={styles.input}
                placeholder='Email'
                value={email}
                onChangeText={text => {handleChange(text, 'email')}}
              >
              </TextInput>

              <TextInput
                style={styles.input}
                placeholder='Password'
                secureTextEntry={true}
                value={password}
                onChangeText={text => {handleChange(text, 'password')}}
              >
              </TextInput>
            </View>
          </View>
        </View>

        <View style={styles.continue}>
          <TouchableOpacity>
            { email, password !== ''
             ? <Button
              title='SIGN IN'
              disabled={validateForm}
              onPress = {(input) => {handleSubmit(input)}}
              color="#020100"
              />
              : null }
            </TouchableOpacity>
        </View>

      </View>

      <View style={styles.bottom}></View>

    </KeyboardAvoidingView>

  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative'
  },
  top: {
    position: 'relative',
    backgroundColor: '#235789',
    paddingRight: 13,
    paddingLeft: 13,
    height: 200,
    flex: 1
  },
  middle: {
    width: '100%',
    height: '100%',
    flex: 1,
    position: 'absolute',
    zIndex: 2,
    backgroundColor: 'transparent',
    paddingLeft: 30,
    paddingRight: 30,
    flex: 2
  },
  bottom: {
    position: 'relative',
    height: '100%',
    paddingRight: 20,
    paddingLeft: 20,
    backgroundColor: '#FDFFFC',
    flex: 1,
    backgroundColor: '#F1D302'
  },
  textContainer: {
    color: '#FDFFFC',
    textTransform: 'uppercase',
    letterSpacing: 7,
    fontWeight: '900',
    fontSize: 20,
    lineHeight: 25,
    textAlign: 'center',
    paddingTop: 120
  },
  formArea: {
    alignSelf: 'center',
    width: '100%',
    backgroundColor: '#FDFFFC',
    top: '7%',
    paddingBottom: 65,
    paddingTop: 5,
    borderRadius: 25
  },
  continue: {
    backgroundColor:'#F1D302',
    borderRadius: 45,
    borderColor: '#F1D302',
    marginLeft: 40,
    marginRight: 40
  },
  input: {
    color: '#020100',
    textTransform: 'uppercase',
    fontSize: 20,
    padding: 20,
    paddingLeft: 25,
    color: '#020100',
    letterSpacing: 4,
    textAlign: 'center',
    fontWeight: '400',
  },
  formItems: {
    marginTop: 25
  },
  homeButton: {
    paddingRight: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  navigation: {
    flex: 0.3
  }
})