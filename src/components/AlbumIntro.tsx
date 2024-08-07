import React from 'react';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import LinearGradient from 'react-native-linear-gradient';

function Imagez() {
  return (
    <Image
      source={require('/Users/mongiwandebele/Desktop/Projects/AwesomeProject/assets/images/albumcover.jpg')}
      style={{height: 200, width: 200}}
    />
  );
}

export default function ImageBackgroundExample() {
  return (
    <SafeAreaView>
      <ImageBackground
        source={require('/Users/mongiwandebele/Desktop/Projects/AwesomeProject/assets/images/albumcover.jpg')}
        resizeMode="cover"
        style={styles.picture}>
        <LinearGradient
          colors={['rgba(0,0,0,0.68)', 'rgba(12,12,13,1)']}
          style={styles.gradient}>
          <View style={styles.something}>
            <View style={styles.topIconz}>
              <Icon
                name="chevron-thin-left"
                size={20}
                color="white"
                style={styles.leftIcon}
              />
              <Icon
                name="dots-three-horizontal"
                size={20}
                color="#C0C0C0"
                style={styles.rightIcon}
              />
            </View>
            <Imagez />
            <Text style={styles.text}>Kanvaz</Text>
            <View style={styles.descrip}>
              <Text style={styles.albumtitle}>Album by High Klassified</Text>
              <Icon
                name="chevron-thin-right"
                size={13}
                color="white"
                style={{left: 5}}
              />
            </View>
            <View style={styles.otherdescrip}>
              <View style={styles.nBck}>
                <Text style={{color: '#C0C0C0', fontWeight: 'bold'}}>
                  {' '}
                  2018
                </Text>
              </View>
              <View style={styles.hBck}>
                <Text style={styles.hightext}>HIGH</Text>
              </View>
            </View>
          </View>
        </LinearGradient>
      </ImageBackground>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  something: {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    //backgroundColor: 'rgba(0,0,0,0.8)',
  },
  gradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  //styling the top icons
  topIconz: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    // alignItems: 'center',
    paddingTop: 15,
    paddingBottom: 10,
    // backgroundColor: 'blue',
    width: '100%',
  },
  leftIcon: {
    alignSelf: 'flex-start',
    marginLeft: 20,
  },
  rightIcon: {
    alignSelf: 'flex-end',
    marginRight: 20,
  },
  nBck: {
    padding: 5,
  },
  hBck: {
    backgroundColor: 'rgba(0,139,139,0.2)',
    borderRadius: 5,
  },
  hightext: {
    fontFamily: 'AvenirLTPro',
    color: 'aqua',
    top: 5,
    paddingHorizontal: 10,
    fontWeight: 'bold',
  },
  descrip: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  otherdescrip: {
    flexDirection: 'row',
    paddingTop: 10,
  },
  // words Album by High Klassified styling
  albumtitle: {
    padding: 10,
    fontFamily: 'AvenirLTProRoman',
    color: '#C0C0C0',
    textAlign: 'left',
    fontSize: 20,
    fontWeight: 'bold',
  },
  //Kanvaz text styling
  text: {
    fontFamily: 'AvenirLTPro',
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
    paddingTop: 10,
  },
  //styling for the background picture
  picture: {
    height: 420,
  },
});
