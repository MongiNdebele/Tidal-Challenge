import React from 'react';
import {
  Image,
  View,
  StyleSheet,
  SafeAreaView,
  FlatList,
  Text,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

const DATA = [
  {
    id: '1',
    title: 'Intro (Robert Glasper x KAYTANADA)',
    artist: 'Robert Glasper Experiment',
  },
];
function Imgg() {
  return (
    <Image
      style={styles.imgg}
      source={require('/Users/mongiwandebele/Desktop/Projects/AwesomeProject/assets/images/robertglasperkaytranada.jpg')}
    />
  );
}

function CurrentlyPlaying() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.container}>
          <Imgg />
          <FlatList
            style={{marginHorizontal: 10, left: 28}}
            data={DATA}
            renderItem={({item}) => (
              <View>
                <Text style={styles.nametitle}>{item.title}</Text>
                <Text style={styles.artisttitle}>{item.artist}</Text>
              </View>
            )}
            keyExtractor={item => item.id}
          />
        </View>
        <View style={styles.icons}>
          <TouchableOpacity>
            <Icon name="controller-play" size={30} color="white" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="controller-next" size={30} color="white" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.realcontainer}>
        <Text style={{color: '#707070'}}>.</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  realcontainer: {
    height: 3,
    backgroundColor: '#707070',
  },
  container: {
    flexDirection: 'row',
    backgroundColor: '#303030',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  imgg: {
    resizeMode: 'contain',
    width: 55,
    height: 55,
    left: 28,
  },
  artisttitle: {
    marginBottom: 4,
    fontFamily: 'AvenirLTProRoman',
    color: '#C0C0C0',
    textAlign: 'left',
    fontSize: 20,
  },
  nametitle: {
    fontFamily: 'AvenirLTProRoman',
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'left',
    fontSize: 20,
  },
  icons: {
    flexDirection: 'row',
    paddingTop: 10,
    paddingLeft: 20,
    right: 60,
    backgroundColor: '#303030',
    width: 70,
    height: 55,
  },
});

export default CurrentlyPlaying;
