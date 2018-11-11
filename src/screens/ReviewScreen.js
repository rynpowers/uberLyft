import React, { Component } from 'react';
import { Button } from 'react-native-elements';
import { View, Text, Platform } from 'react-native';
import Nav from '../components/Nav';

class ReviewScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Review Places',
      headerRight: (
        <Button
          title="Settings"
          onPress={() => navigation.navigate('deck')}
          backgroundColor="rgba(0, 0, 0, 0)"
          color="rgba(0, 122, 255, 1)"
        />
      ),
      style: {
        marginTop: Platform.OS === 'android' ? 24 : 0,
      },
    };
  };
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'space-between',
          flexDirection: 'column',
        }}
      >
        <View>
          <Text>Hello</Text>
        </View>
        <Nav navigation={this.props.navigation} left="map" right="places" />
      </View>
    );
  }
}

export default ReviewScreen;
