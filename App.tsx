import React from 'react';
import {View, StyleSheet, SafeAreaView} from 'react-native';
import TrackList from './src/components/Tracklist';
import CurrentlyPlaying from './src/components/currentlyPlaying';
import ImageBackgroundExample from './src/components/AlbumIntro';
import Functionalicons from './src/components/Functionalicons';
import PlayIcons from './src/components/PlayIcons';
import Fakenavbar from './src/components/fakeNavBar';

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.intro}>
        <ImageBackgroundExample />
      </View>
      <View style={styles.iconz}>
        <PlayIcons />
      </View>
      <View style={styles.funiconz}>
        <Functionalicons />
      </View>
      <View style={styles.tracklis}>
        <TrackList />
      </View>
      <View style={styles.currentplay}>
        <CurrentlyPlaying />
      </View>
      <View style={styles.fakenav}>
        <Fakenavbar />
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    backgroundColor: 'black',
  },
  //styling for add, credits , download and share icons
  funiconz: {
    backgroundColor: 'black',
    padding: 10,
  },
  intro: {
    flex: 0.6,
    backgroundColor: 'coral',
  },
  //styling for play and shuffle icon
  iconz: {
    flex: 0.1,
    padding: 5,
    backgroundColor: 'black',
  },
  currentplay: {
    top: 25,
  },
  tracklis: {
    flex: 0.25,
    //padding: 10,
    backgroundColor: 'black',
  },
  currentlyPlaying: {
    paddingTop: 25,
    top: 25,
    flex: 0.2,
  },
  fakenav: {
    backgroundColor: 'black',
    top: 45,
  },
});

export default App;
