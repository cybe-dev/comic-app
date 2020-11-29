import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Detail, Browse, Home, Search, More, Read} from './src/pages';
import {StatusBar} from 'react-native';
import {primary} from './src/colors';

//icon
import HomeIcon from './src/assets/icons/HomeIcon.svg';
import BackIcon from './src/assets/icons/BackIcon.svg';
import GenreIcon from './src/assets/icons/GenreIcon.svg';
import SearchIcon from './src/assets/icons/SearchIcon.svg';
import MoreIcon from './src/assets/icons/MoreIcon.svg';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const defaultBackButton = {
  headerBackImage: ({tintColor}) => {
    return <BackIcon height={20} style={{color: tintColor, marginLeft: 13}} />;
  },
};

const headerDefaultStyle = {
  headerTitleAlign: 'center',
  headerTintColor: '#FFF',
  headerStyle: {
    backgroundColor: primary,
    elevation: 5,
  },
  headerTitleStyle: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 18,
  },
  ...defaultBackButton,
};

const HomeScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{title: 'Home'}} />
    </Stack.Navigator>
  );
};

const BrowseScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Browse"
        component={Browse}
        options={{
          title: 'Jelajahi',
          ...headerDefaultStyle,
        }}
      />
    </Stack.Navigator>
  );
};

const SearchScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Search"
        component={Search}
        options={{
          title: 'Pencarian',
          ...headerDefaultStyle,
        }}
      />
    </Stack.Navigator>
  );
};

const MoreScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="More"
        component={More}
        options={{
          title: 'Lainnya',
          ...headerDefaultStyle,
        }}
      />
    </Stack.Navigator>
  );
};

const BottomTab = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        tabStyle: {
          backgroundColor: '#FFF',
        },
        activeTintColor: primary,
        inactiveTintColor: '#555',
        showLabel: false,
      }}
      screenOptions={({route}) => ({
        tabBarIcon: ({color}) => {
          let Icon;
          if (route.name === 'HomeScreen') {
            Icon = HomeIcon;
          } else if (route.name === 'BrowseScreen') {
            Icon = GenreIcon;
          } else if (route.name === 'SearchScreen') {
            Icon = SearchIcon;
          } else if (route.name === 'MoreScreen') {
            Icon = MoreIcon;
          }

          return <Icon style={{color}} height={24} />;
        },
      })}>
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
      <Tab.Screen name="BrowseScreen" component={BrowseScreen} />
      <Tab.Screen name="SearchScreen" component={SearchScreen} />
      <Tab.Screen name="MoreScreen" component={MoreScreen} />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <React.Fragment>
      <StatusBar backgroundColor={primary} />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Main"
            component={BottomTab}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Detail"
            component={Detail}
            options={{
              ...defaultBackButton,
              ...TransitionPresets.RevealFromBottomAndroid,
            }}
          />
          <Stack.Screen
            name="Read"
            component={Read}
            options={{
              ...defaultBackButton,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </React.Fragment>
  );
};
export default App;
