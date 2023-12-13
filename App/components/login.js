import React from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Image,
} from 'react-native';

import AppButton from './button';
//import Icon from 'react-native-vector-icons/FontAwesome';


function Login(props) {
  return (
    <View style={styles.login}>
      <Image style={styles.windowLogo} source={require('../assets/images/window-logo.png')} />
      <View style={styles.field}>
        {/* <Icon name="user" size={20} color="#666" /> */}
        <TextInput placeholder="Email..." placeholderTextColor="#999" style={styles.input} />
      </View>
      
      <View style={styles.field}>
        {/* <Icon name="lock" size={20} color="#666" /> */}
        <TextInput placeholder="Password" placeholderTextColor="#999" style={styles.input} secureTextEntry={true} />
      </View>
      
      <AppButton toggle={props.toggle} title="Log in"></AppButton>
      <Image style={styles.logo} source={require('../assets/images/umpg-logo.png')} />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 0,
    paddingVertical: 12,
    paddingHorizontal: 12,
    fontSize: 15,
    color: 'white'
  },
  login: {
    alignItems: 'center'
  },
  field: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginVertical: 10,
    borderWidth: 0,
    borderBottomWidth: 1,
    borderColor: 'white',
    width: 300,
    fontSize: 15,
  },
  windowLogo: {
    width: 100,
    height: 108,
    marginBottom: 30
  },
  logo: {
    marginTop: 30,
    width: 80,
    height: 46,
  }
});

export default Login;