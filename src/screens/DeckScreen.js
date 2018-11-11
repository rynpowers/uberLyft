import React, { Component } from 'react';
import { View, Text } from 'react-native';
import DeckView from '../components/DeckView';

class DeckScreen extends Component {
  static navigationOptions = () => {
    return {
      tabBarVisible: false,
    };
  };
  render() {
    return <DeckView />;
  }
}

export default DeckScreen;
