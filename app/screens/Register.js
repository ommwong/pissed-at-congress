import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, Button, TouchableOpacity, View, KeyboardAvoidingView } from 'react-native';

export default function Register({ registerUser, setIsAuthenticated }) {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleChange (input, stateName) {
    switch(stateName) {
      case 'name' :
        return setName(input)
      case 'email' :
        return setEmail(input)
      case 'password' :
        return setPassword(input)
    }
  }

  async function handleSubmit (input) {
    const res = await registerUser(name, email, password)

    if (res.error && input) {
      alert('Something went wrong');
      name('');
      email('');
      password('');
    }
    const { accessToken } = res;
    localStorage.setItem('accessToken', accessToken);
    setIsAuthenticated(true);

    navigation.navigate('Home');
  }

  const validateForm = () => {
    return (
      !name || !email || !password
    );
  };

  return (

    <KeyboardAvoidingView style={styles.container} behavior="padding">

      <View style={styles.top}></View>
      <View style={styles.middle}>

        <Text style={styles.textContainer}> REGISTER </Text>

        <View style={styles.formArea}>
          <View style={styles.mainForm}>
            <View style={styles.formItems}>
              <TextInput
                style={styles.input}
                placeholder='Name'
                value={name}
                onChangeText={text => {handleChange(text, 'name')}}
              >
              </TextInput>

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
            { name, email, password !== ''
             ? <Button
              title='REGISTER'
              disabled={validateForm()}
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
    backgroundColor: '#F1D302',
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
    backgroundColor: '#C1292E'
  },
  textContainer: {
    color: '#020100',
    textTransform: 'uppercase',
    letterSpacing: 7,
    fontWeight: '900',
    fontSize: 20,
    lineHeight: 25,
    textAlign: 'center',
    paddingTop: 101
  },
  formArea: {
    alignSelf: 'center',
    width: '100%',
    backgroundColor: '#FDFFFC',
    top: '9%',
    paddingBottom: 40,
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