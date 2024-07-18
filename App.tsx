import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/components/HomeScreen';
import Icon from 'react-native-vector-icons/Feather';

const screenOptions = ({route}) => ({
  headerShown: false,
  tabBarActiveTintColor: 'aqua',
  tabBarInactiveTintColor: 'rgb(154,154,168)',
  tabBarStyle: [
    {
      display: 'flex',
      backgroundColor: 'rgb(0,0,0)',
      borderTopWidth: 3,
      borderTopColor: 'rgb(75,75,81)',
      flex: 0.085,
    },
    null,
  ],
  tabBarShowLabel: false,
  tabBarIcon: ({focused, color}) => {
    let size = 32;
    let iconName;

    if (route.name === 'Home') {
      iconName = focused ? 'home' : 'home';
    } else if (route.name === 'Playlists') {
      iconName = focused ? 'youtube' : 'youtube';
    } else if (route.name === 'Search') {
      iconName = focused ? 'search' : 'search';
    } else if (route.name === 'Library') {
      iconName = focused ? 'bar-chart-2' : 'bar-chart-2';
    } else if (route.name === 'Profile') {
      iconName = focused ? 'user' : 'user';
    }

    // Return custom icon component
    return <Icon name={iconName} size={size} color={color} />;
  },
});

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Playlists" component={Home} />
        <Tab.Screen name="Search" component={Home} />
        <Tab.Screen name="Library" component={Home} />
        <Tab.Screen name="Profile" component={Home} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;

/* tabBarOptions={{
  activeTintColor: 'aqua',
  inactiveTintColor: 'rgb(154,154,168)',
}} */
