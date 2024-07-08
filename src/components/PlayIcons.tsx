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
            style={{alignItems: 'center', left: 50}}
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
            style={{alignItems: 'center', left: 50}}
          />
          <Text style={styles.shufflewords}>Shuffle</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  playIcon: {
    alignItems: 'center',
    flexDirection: 'row',
    width: 180,
    height: 50,
    backgroundColor: 'white',
    borderRadius: 15,
  },
  shuffleIcon: {
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'grey',
    width: 180,
    height: 50,
    borderRadius: 15,
  },
  shufflewords: {
    fontFamily: 'AvenirLTPro',
    color: 'white',
    fontSize: 18,
    left: 50,
    fontWeight: 'bold',
  },
  playwords: {
    fontFamily: 'AvenirLTPro',
    color: 'black',
    left: 50,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default PlayIcons;
