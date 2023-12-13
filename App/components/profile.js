import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
} from 'react-native';

import AppButton from './button';


function Profile(props) {
  return (
    <View  style={styles.content}>
      <Image style={styles.avatar} source={require('../assets/images/adele.webp')} />
      <Text style={styles.text} >Welcome back Adele</Text>
      <Text style={styles.copy} >Last login: 12/12/2023</Text>
      <AppButton toggle={props.toggle} title="Log out"></AppButton>
    </View>
  );
}

const styles = StyleSheet.create({
  avatar: {
    width: 150,
    height: 150,
    marginBottom: 30,
    borderRadius: 75,
  },
  content: {
    alignItems: 'center',
    color: 'white'
  },
  text: {
    fontSize: 26,
    fontWeight: '400',
    color: '#ffffff',
    marginBottom: 10
  },
  copy: {
    fontSize: 14,
    fontWeight: '400',
    color: '#ffffff',
    marginBottom: 30
  }
});

export default Profile;