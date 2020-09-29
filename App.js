/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Button
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

const App= () => {
  const [name, setName] = useState('');
  const [hobby, setHobby] = useState('');
  const [textName, setTextName] = useState('');
  const [textHobby, setTextHobby] = useState('');

  const storeData =() => {
    AsyncStorage.setItem('name', textName)
    AsyncStorage.setItem('hobby', textHobby);
  };

  const getData = () => {
      AsyncStorage.getItem('name')
      .then(name => {
        if(name !== null) {
          setName(name);
        }
      })
      .catch(e => console.log(e));
      AsyncStorage.getItem('hobby')
      .then(hobby => {
        if(hobby !== null) {
          setHobby(hobby);
        }
      })
      .catch(e => console.log(e));
  }

  const saveData = ()=>{
    storeData();
    getData();
    alert('data saved');
  }

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Halo kenalan yuks!
        </Text>
        <Text style={styles.textDetail}>
          Name: {name +'\n'}
          Hobby: {hobby}
        </Text>
        <TextInput
          style={styles.input}
          onChangeText={(textName) => setTextName(textName)}
          placeholder='Name'
        />
        <TextInput
          style={styles.input}
          onChangeText={(textHobby) => setTextHobby(textHobby)}
          placeholder='Hobby'
        />
        <Button
          color='purple'
          title='Simpan'
          onPress={()=> saveData()}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    padding: 16,
    paddingTop: 32,
  },
  welcome: {
    fontSize: 25,
    textAlign: 'center',
    margin: 10,
  },
  input: {
    height: 35,
    backgroundColor: 'white',
    marginVertical: 8,
    borderWidth: 1,
    borderColor: 'grey',
    padding: 8,
    paddingLeft:20,
    width: '100%',
    borderRadius:70
  },
  textDetail: {
    fontSize: 18
  },
});

export default App;
