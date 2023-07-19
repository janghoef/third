import {
  View,
  Text,
  Button,
  StyleSheet,
  Alert,
  ToastAndroid,
  Image,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {TextInput} from 'react-native-gesture-handler';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const App = () => {
  const [name, setName] = useState('');
  const [press, setpress] = useState('');

  const onPressHandler = () => {
    if (name.length > 5) {
      setpress(!press);
    } else {
      Alert.alert('warning', 'the name must be longer than 5 characters', [
        {text: 'OK'},
      ]);
    }
  };
  return (
    <GestureHandlerRootView>
      <View style={style.body}>
        <Text style={style.text1}>Enter Your Name </Text>

        <TextInput
          style={style.input}
          placeholder="john"
          onChangeText={value => setName(value)}></TextInput>

        <View style={style.btn}>
          <Button
            title={press ? 'clear' : 'press'}
            onPress={onPressHandler}></Button>
        </View>

        {press ? (
          <>
            <Text style={style.txt2}>Your register as : {name}</Text>
            <Image
              style={{width: 65, height: 40, alignSelf: 'center'}}
              source={require('./src/Assets/Tick.png')}
            />
          </>
        ) : null}

        <View style={style.full}>
          <View style={style.view}>
            <Text style={style.text}>.</Text>
          </View>

          <View style={style.view2}>
            <Text style={style.text}>.</Text>
          </View>

          <View style={style.view3}>
            <Text style={style.text}>.</Text>
          </View>
        </View>
      </View>
    </GestureHandlerRootView>
  );
};

export default App;
const style = StyleSheet.create({
  body: {
    padding: 5,
    borderWidth: 20,
    borderColor: '#008b8b',
  },

  text1: {
    fontSize: 30,
    alignSelf: 'center',
    margin: 20,
    color: 'black',
  },

  input: {
    alignSelf: 'center',
    borderWidth: 1,
    width: 200,
    borderRadius: 20,
    textAlign: 'center',
    fontSize: 20,
    margin: 5,
  },

  txt2: {
    color: 'black',
    alignSelf: 'center',
    fontSize: 20,
  },

  btn: {
    width: 200,
    alignSelf: 'center',
    margin: 2,
    marginTop: 2,
  },
  view: {
    width: 100,
    height: 350,
    backgroundColor: 'grey',
  },
  view2: {
    width: 100,
    height: 350,
    backgroundColor: 'green',
    marginLeft: 5,
  },
  view3: {
    width: 100,
    height: 350,
    backgroundColor: 'yellow',
    marginLeft: 5,
  },

  full: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 70,
  },
});
