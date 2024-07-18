import React from 'react';
import {Image, View, StyleSheet, SafeAreaView, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

function Imgg() {
  return (
    <Image
      style={styles.picture}
      source={require('/Users/mongiwandebele/Desktop/Projects/AwesomeProject/assets/images/robertglasperkaytranada.jpg')}
    />
  );
}
function CurrentlyPlaying() {
  return (
    <SafeAreaView style={styles.container}>
      <Imgg />
      <View style={styles.textportion}>
        <Text style={styles.songname}>Intro (Robert Glasper x KAYTRANADA)</Text>
        <Text style={styles.artistnames}>Robert Glasper Experiment</Text>
      </View>
      <View style={styles.iconContainer}>
        <Icon name="controller-play" size={30} color="white" />
        <Icon name="controller-next" size={30} color="white" />
      </View>
    </SafeAreaView>
    /*       <View style={styles.greybar}>
        <Text style={{color: '#707070'}}>.</Text>
      </View>
    </SafeAreaView> */
  );
}

const styles = StyleSheet.create({
  picture: {
    resizeMode: 'cover',
    width: 70,
    height: 70,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'rgb(27,27,28)',
    width: '100%',
  },
  textportion: {
    flex: 0.85,
    backgroundColor: 'rgb(27,27,28)',
    position: 'absolute',
    left: 75,
  },
  songname: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
  artistnames: {
    color: 'rgb(173,173,187)',
    fontSize: 16,
  },
  iconContainer: {
    flexDirection: 'row',
    backgroundColor: 'rgb(27,27,28)',
    padding: 17,
    gap: 25,
    alignSelf: 'center',
    justifyContent: 'space-between',
  },
  /*   greybar: {
    height: 3,
    backgroundColor: 'rgb(75,75,81)',
  }, */
});

export default CurrentlyPlaying;

/* function CurrentlyPlaying() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Imgg />
        <View style={styles.textthing}>
          <Text style={styles.songname}>
            Intro (Robert Glasper x KAYTANADA)
          </Text>
          <Text style={styles.artistnames}>Robert Glasper Experiment</Text>
        </View>
        <View style={styles.icons}>
          <Icon name="controller-play" size={30} color="white" />
          <Icon name="controller-next" size={30} color="white" />
        </View>
      </View>
      <View style={styles.realcontainer}>
        <Text style={{color: '#707070'}}>.</Text>
      </View>
    </SafeAreaView>
  );
} */

/* const styles = StyleSheet.create({
  picture: {
    // resizeMode: 'contain',
    width: 65,
    height: 65,
  },
  container: {
    width: '100%',
    flexDirection: 'row',
    backgroundColor: 'green',
    // backgroundColor: 'rgb(27,27,28)',
    //justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'nowrap',
    //flexBasis: 1,
    // flexShrink: 1,
  },
  textthing: {
    backgroundColor: 'pink',
    justifyContent: 'flex-start',
    // marginHorizontal: 10,
  },
  songname: {
    fontFamily: 'AvenirLTProLight',
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'left',
    fontSize: 18,
  },
  artistnames: {
    overflow: 'hidden',
    marginBottom: 4,
    fontFamily: 'AvenirLTProRoman',
    color: 'rgb(173,173,187)',
    textAlign: 'left',
    fontSize: 18,
  },
  icons: {
    flexDirection: 'row',
    padding: 20,
    // paddingLeft: 20,
    // backgroundColor: 'rgb(27,27,28)',
    backgroundColor: 'blue',
  },
  realcontainer: {
    height: 3,
    backgroundColor: 'rgb(75,75,81)',
  },
}); */
