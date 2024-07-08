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

const DATA = [
  {id: '1', title: 'Stenio Keytar', artist: 'High Klassified'},
  {id: '2', title: 'Come Over', artist: 'High Klassified, Leaf'},
];

function TrackList() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <FlatList
          data={DATA}
          renderItem={({item}) => (
            <View style={styles.item}>
              <Text style={styles.idtitle}>{item.id}</Text>
            </View>
          )}
          keyExtractor={item => item.id}
        />
        <View style={styles.list}>
          <FlatList
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
        <View style={styles.icon}>
          <Dotdot />
          <Dotdot />
        </View>
      </SafeAreaView>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    height: 200,
  },
  list: {
    padding: 10,
    right: 170,
    backgroundColor: 'black',
  },
  nametitle: {
    padding: 5,
    fontFamily: 'AvenirLTProRoman',
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'left',
    fontSize: 20,
  },
  artisttitle: {
    padding: 4,
    fontFamily: 'AvenirLTProRoman',
    color: '#C0C0C0',
    textAlign: 'left',
    fontSize: 20,
    backgroundColor: 'black',
  },
  idtitle: {
    top: 30,
    padding: 10,
    width: 35,
    height: 70,
    marginBottom: 4,
    fontFamily: 'AvenirLTProRoman',
    color: '#C0C0C0',
    fontSize: 20,
    backgroundColor: 'black',
    alignItems: 'center',
  },
  icon: {
    right: 25,
    flexDirection: 'column',
    marginHorizontal: 5,
    fontSize: 20,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
});
export default TrackList;
