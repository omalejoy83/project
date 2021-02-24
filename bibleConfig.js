import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import Channels from './app/bible/channels';
import Bible from './app/bible/books';
import Home from './app/bible/homepage';
import Book from './app/bible/book';
import BiblePage from './app/bible/biblepage';
import Chapters from './app/bible/chapters';
import Verses from './app/bible/verses';
import MoreScreen from './app/bible/more';
import PracticeScreen from './app/bible/practicescreen';
import {AsyncStorage} from 'react-native';
console.disableYellowBox = true;

// const Tab = createBottomTabNavigator(
//   {
//     Home: { screen: Home },
//     Read: { screen: Chapters }

//   },
//   {
//     tabBarPosition: 'bottom',
//     swipeEnabled: true,
//     animationEnabled: true,
//     tabBarOptions: {
//       activeTintColor: '#FFFFFF',
//       inactiveTintColor: '#F8F8F8',
//       style: {
//         backgroundColor: '#123456',
//       },
//       labelStyle: {
//         textAlign: 'center',
//       },
//       indicatorStyle: {
//         borderBottomColor: 'white',
//         borderBottomWidth: 2,
//       },
//     },

//   }
// );

const TabScreen = createMaterialTopTabNavigator(
  {
    Books: {screen: Book},
    Chapters: {screen: Chapters},
    Verses: {screen: Verses},
  },
  {
    tabBarPosition: 'top',
    swipeEnabled: true,
    animationEnabled: true,
    tabBarOptions: {
      activeTintColor: '#FFFFFF',
      inactiveTintColor: '#F8F8F8',
      style: {
        backgroundColor: '#123456',
      },
      labelStyle: {
        textAlign: 'center',
      },
      indicatorStyle: {
        borderBottomColor: 'white',
        borderBottomWidth: 2,
      },
    },
  },
);

const MainNav = createStackNavigator(
  {
    Home: Home,
    MoreScreen: MoreScreen,
    PracticeScreen: PracticeScreen,
    BiblePage: BiblePage,
    TabNav: TabScreen,
  },
  {
    headerMode: 'none',
    drawerType: 'slide',
    contentComponent: props => <Channels {...props} />,
  },
);

// const TabNav = createStackNavigator({
//     TabScreen: {
//       screen: TabScreen,
//       navigationOptions: {
//         headerStyle: {
//           backgroundColor: '#633689',
//         },
//         headerTintColor: '#FFFFFF',
//         title: 'KJV Bible',
//       },
//     },
//   });

const Switch = createSwitchNavigator(
  {
    MainNav: MainNav,
  },
  {
    headerMode: 'none',
  },
);
const persistenceKey2 =
  'smakjhgrggjjjjgthkkjjjjjjjjlljkkkkgghhgjjjhggglljmlllmmjjjjokkkggghhhjjjhjjjjkkkkkkkkkhhhhhggggggggggsssskkkyggkduukdg2yyy77777jjjj2233333kjhg3333';
const persistNavigationState = async navState => {
  console.log(navState);

  try {
    await AsyncStorage.setItem(persistenceKey2, JSON.stringify(navState));
  } catch (err) {}
};

const loadNavigationState = async () => {
  const jsonString = await AsyncStorage.getItem(persistenceKey2);
  return JSON.parse(jsonString);
};

const AppContainer = createAppContainer(Switch);
function getPersistenceFunctions() {
  return {
    persistNavigationState,
    loadNavigationState,
  };
}

class App extends React.Component {
  render() {
    return <AppContainer {...getPersistenceFunctions()} />;
  }
}
export default App;
