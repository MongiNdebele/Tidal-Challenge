import React from 'react';
import {
  SafeAreaView,
  FlatList,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

function Dotdot() {
  return (
    <View>
      <TouchableOpacity>
        <Icon name="dots-three-horizontal" size={30} color="#C0C0C0" />
      </TouchableOpacity>
    </View>
  );
}
//Still need to adjust fonts
const DATA = [
  {id: '1', title: 'Stenio Keytar', artist: 'High Klassified'},
  {id: '2', title: 'Come Over', artist: 'High Klassified, Leaf'},
  {id: '3', title: 'NS Bounce', artist: 'High Klassified, Da-P'},
  {
    id: '4',
    title: '1919(Feat.Zach Zoya )',
    artist: 'High Klassified, Zach Zoya',
  },
];

function TrackList() {
  return (
    <>
      <SafeAreaView>
        <FlatList
          data={DATA}
          renderItem={({item}) => (
            <View style={styles.container}>
              <View style={styles.idview}>
                <Text style={styles.idtitle}>{item.id}</Text>
              </View>
              <View style={styles.list}>
                <Text style={styles.nametitle}>{item.title}</Text>
                <Text style={styles.artisttitle}>{item.artist}</Text>
              </View>
              <View style={styles.icon}>
                <Dotdot />
              </View>
            </View>
          )}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    flexDirection: 'row',
    //justifyContent: 'center',
    //alignContent: 'center',
    //height: 200,
  },
  ///Styling for the name of the song and the artist
  list: {
    flex: 0.8,
    padding: 10,
    //height: 200,
    //right: 170,
    backgroundColor: 'black',
  },
  ///Name of the song
  nametitle: {
    padding: 2.5,
    fontFamily: 'AvenirLTProRoman',
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'left',
    fontSize: 20,
  },
  ////Name of the artists on the song
  artisttitle: {
    padding: 2.5,
    fontFamily: 'AvenirLTProRoman',
    color: '#C0C0C0',
    textAlign: 'left',
    fontSize: 20,
    backgroundColor: 'black',
  },
  idview: {
    flex: 0.1,
    //width: 35,
    //height: 70,
    marginBottom: 4,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  idtitle: {
    fontFamily: 'AvenirLTProRoman',
    color: '#C0C0C0',
    fontSize: 20,
  },
  icon: {
    flex: 0.1,
    //right: 25,
    flexDirection: 'column',
    marginHorizontal: 5,
    fontSize: 20,
    //alignItems: 'center',
    justifyContent: 'center',
  },
});
export default TrackList;
