import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';

function PlayIcons() {
  return (
    <SafeAreaView style={styles.container}>
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
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    //backgroundColor: 'blue',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 15,
    //alignItems: 'center',
  },
  playIcon: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    width: '85%',
    height: 55,
    backgroundColor: 'rgb(255,255,255)',
    borderRadius: 15,
  },
  shuffleIcon: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: 'rgb(56,56,61)',
    width: '85%',
    height: 55,
    borderRadius: 15,
  },
  //styling for the word Shuffle
  shufflewords: {
    margin: 5,
    fontFamily: 'AvenirLTPro',
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  //styling for the word Play
  playwords: {
    margin: 5,
    fontFamily: 'AvenirLTPro',
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default PlayIcons;
