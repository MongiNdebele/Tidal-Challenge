import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

function PlayIcons() {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <View style={styles.playIcon}>
          <Icon
            name="play-sharp"
            size={30}
            color="black"
            style={{alignItems: 'center'}}
          />
          <Text style={styles.playwords}>Play</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.shuffleIcon}>
          <Icon
            name="shuffle"
            size={30}
            color="white"
            style={{alignItems: 'center'}}
          />
          <Text style={styles.shufflewords}>Shuffle</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    //backgroundColor: 'blue',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    //alignItems: 'center',
  },
  playIcon: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    width: 165,
    height: 50,
    backgroundColor: 'rgb(255,255,255)',
    borderRadius: 15,
  },
  shuffleIcon: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: 'rgb(56,56,61)',
    width: 165,
    height: 50,
    borderRadius: 15,
  },
  //styling for the word Shuffle
  shufflewords: {
    margin: 5,
    fontFamily: 'AvenirLTPro',
    color: 'white',
    fontSize: 18,
    //left: 50,
    fontWeight: 'bold',
  },
  //styling for the word Play
  playwords: {
    margin: 5,
    fontFamily: 'AvenirLTPro',
    color: 'black',
    //left: 50,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default PlayIcons;
