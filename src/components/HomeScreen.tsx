import React from 'react';
import {View, StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import TrackList from '/Users/mongiwandebele/Desktop/Projects/AwesomeProject/src/components/Tracklist.tsx';
import CurrentlyPlaying from '/Users/mongiwandebele/Desktop/Projects/AwesomeProject/src/components/currentlyPlaying';
import ImageBackgroundExample from '/Users/mongiwandebele/Desktop/Projects/AwesomeProject/src/components/AlbumIntro';
import Functionalicons from '/Users/mongiwandebele/Desktop/Projects/AwesomeProject/src/components/Functionalicons';
import PlayIcons from '/Users/mongiwandebele/Desktop/Projects/AwesomeProject/src/components/PlayIcons';

function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
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
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    backgroundColor: 'rgb(15,15,15)',
  },
  intro: {
    flex: 0.57,
    backgroundColor: 'coral',
  },
  //styling for play and shuffle icon
  iconz: {
    flex: 0.1,
    padding: 5,
    backgroundColor: 'rgb(15,15,15)',
  },
  //styling for add, credits , download and share icons
  funiconz: {
    backgroundColor: 'rgb(15,15,15)',
    padding: 10,
  },
  tracklis: {
    flex: 0.27,
    backgroundColor: 'rgb(15,15,15)',
  },
  currentplay: {
    flex: 0.2,
  },
});

export default Home;

/* import React from 'react';
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
    backgroundColor: 'rgb(15,15,15)',
  },
  intro: {
    flex: 0.55,
    backgroundColor: 'coral',
  },
  //styling for play and shuffle icon
  iconz: {
    flex: 0.1,
    padding: 5,
    backgroundColor: 'rgb(15,15,15)',
  },
  //styling for add, credits , download and share icons
  funiconz: {
    backgroundColor: 'rgb(15,15,15)',
    padding: 10,
  },
  tracklis: {
    flex: 0.26,
    backgroundColor: 'rgb(15,15,15)',
  },
  currentplay: {
    flex: 0.12,
  },
  fakenav: {
    backgroundColor: 'rgb(15,15,15)',
    flex: 0.1,
  },
});

export default App;
 */
