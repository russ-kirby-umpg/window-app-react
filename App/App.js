import React, { useState } from 'react';
import {
  StyleSheet,
  Button,
  View,
  ImageBackground
} from 'react-native';



import Login from './components/login';
import Profile from './components/profile';

function App() {

  const [loggedIn, setLoggedIn] = useState(false);

  const toggleAuth = () => {
    setLoggedIn(!loggedIn)
  }

  return (
    <View style={styles.background}>
      <ImageBackground source={require('./assets/images/bg.jpg')} resizeMode="cover" style={styles.image}></ImageBackground>
        {loggedIn ? (
          <Profile toggle={toggleAuth} />
        ) : (
          <Login toggle={toggleAuth}  />
        )}
       
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#111111',
    alignItems: 'center'
  },
  
  image: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: "stretch",
    opacity: 0.4,
    position: 'absolute',
    width: '100%',
    height: '100%'
  }
});

export default App;