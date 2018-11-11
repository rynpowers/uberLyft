import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import store from './src/store';
import {
  createBottomTabNavigator,
  createStackNavigator,
} from 'react-navigation';
import AuthScreen from './src/screens/AuthScreen';
import WelcomeScreen from './src/screens/WelcomeScreen';
import MapScreen from './src/screens/MapScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import ReviewScreen from './src/screens/ReviewScreen';
import DeckScreen from './src/screens/DeckScreen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const MainNavigator = createBottomTabNavigator(
  {
    welcome: { screen: WelcomeScreen },
    auth: { screen: AuthScreen },
    main: {
      screen: createBottomTabNavigator(
        {
          map: {
            screen: createStackNavigator({
              map: MapScreen,
              deck: DeckScreen,
            }),
          },
          places: {
            screen: createStackNavigator({
              places: ReviewScreen,
              deck: DeckScreen,
            }),
          },
        },
        {
          navigationOptions: {
            tabBarVisible: false,
          },
        }
      ),
    },
  },
  {
    navigationOptions: {
      tabBarVisible: false,
    },
  }
);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <MainNavigator />
        </View>
      </Provider>
    );
  }
}
