import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import Iconic from 'react-native-vector-icons/EvilIcons';
import {View, TouchableOpacity, StyleSheet} from 'react-native';

function Fakenavbar() {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Icon name="home" size={35} color="aqua" />
      </TouchableOpacity>
      <TouchableOpacity>
        <Icon name="youtube" size={35} color="#707070" />
      </TouchableOpacity>
      <TouchableOpacity>
        <Iconic name="search" size={35} color="#707070" />
      </TouchableOpacity>
      <TouchableOpacity>
        <Icon name="bar-chart-2" size={35} color="#707070" />
      </TouchableOpacity>
      <TouchableOpacity>
        <Iconic name="user" size={35} color="#707070" />
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingTop: 8,
  },
  add: {
    fontFamily: 'AvenirLTProRoman',
    color: 'white',
    fontWeight: 'bold',
  },
  share: {
    fontFamily: 'AvenirLTProRoman',
    color: 'white',
    fontWeight: 'bold',
  },
  download: {
    fontFamily: 'AvenirLTProRoman',
    color: 'white',
    fontWeight: 'bold',
  },
  credits: {
    fontFamily: 'AvenirLTProRoman',
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Fakenavbar;
