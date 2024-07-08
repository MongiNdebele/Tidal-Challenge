import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';
import Iconic from 'react-native-vector-icons/EvilIcons';

// Screens -- edit locations
import HomeScreen from './screens/HomeScreen';
import PlaylistScreen from './screens/DetailsScreen';
import SearchScreen from './screens/SettingsScreen';
import LibraryScreen from './screens/DetailsScreen';
import ProfileScreen from './screens/SettingsScreen';

//Screen names
const homeName = 'Home';
const PlaylistName = 'Playlists';
const SearchName = 'Search';
const LibraryName = 'Library';
const ProfileName = 'Profile';

const Tab = createBottomTabNavigator();

function MainContainer() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;
            let rn = route.name;

            if (rn === homeName) {
              iconName = focused ? 'home' : 'home';
            } else if (rn === PlaylistName) {
              iconName = focused ? 'Playlists' : 'youtube';
            } else if (rn === SearchName) {
              iconName = focused ? 'Search' : 'zoom-in';
            } else if (rn === LibraryName) {
              iconName = focused ? 'Library' : 'bar-chart-2';
            } else if (rn === ProfileName) {
              iconName = focused ? 'Profile' : 'user';
            }

            return <Icon name={iconName} size={size} color={color} />;
          },
        })}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Playlists" component={HomeScreen} />
        <Tab.Screen name="Search" component={HomeScreen} />
        <Tab.Screen name="Library" component={HomeScreen} />
        <Tab.Screen name="Profile" component={HomeScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MainContainer;
