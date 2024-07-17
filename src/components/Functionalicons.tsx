import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

function Functionalicons() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.iconcontainer}>
        <Icon name="heart" size={30} color="white" />
        <Text style={styles.add}>Add</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconcontainer}>
        <Icon name="info" size={30} color="white" />
        <Text style={styles.credits}>Credits</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconcontainer}>
        <Icon name="arrow-down-circle" size={30} color="white" />
        <Text style={styles.download}>Download</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconcontainer}>
        <Icon name="share" size={30} color="white" />
        <Text style={styles.share}>Share</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  add: {
    fontFamily: 'AvenirLTProRoman',
    color: 'white',
    fontWeight: 'bold',
  },
  iconcontainer: {
    alignItems: 'center',
  },
  share: {
    fontFamily: 'AvenirLTProRoman',
    color: 'white',
    // right: 1,
    fontWeight: 'bold',
  },
  download: {
    fontFamily: 'AvenirLTProRoman',
    color: 'white',
    // right: 13,
    fontWeight: 'bold',
  },
  credits: {
    fontFamily: 'AvenirLTProRoman',
    color: 'white',
    // right: 8,
    fontWeight: 'bold',
  },
});

export default Functionalicons;
