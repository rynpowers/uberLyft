import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import store from './src/store';
import {
  createBottomTabNavigator,
  createStackNavigator,
} from 'react-navigation';
import DeckView from './src/components/DeckView';

import AuthScreen from './src/screens/AuthScreen';
import WelcomeScreen from './src/screens/WelcomeScreen';
import MapScreen from './src/screens/MapScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import ReviewScreen from './src/screens/ReviewScreen';

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
      screen: createBottomTabNavigator({
        map: { screen: MapScreen },
        deck: { screen: DeckView },
        review: {
          screen: createStackNavigator({
            review: ReviewScreen,
            settings: SettingsScreen,
          }),
        },
      }),
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
