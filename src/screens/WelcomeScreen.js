import React, { Component } from 'react';
import { View, ActivityIndicator, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import Slides from '../components/Slides';
import { initializeApp } from '../actions';
import Spinner from '../components/Spinner';

const SLIDE_DATA = [
  { text: 'Welcome to UberLyft', color: '#e056fd' },
  {
    text: "We know it's been a long night and this decision is hard",
    color: '#1e272e',
  },
  {
    text: 'Remember to save your frequently traveled desitnations!',
    color: '#e056fd',
  },
];

class WelcomeScreen extends Component {
  componentDidMount() {
    // await AsyncStorage.removeItem('fb_token');

    setTimeout(() => {
      this.props.initializeApp();
    }, 1000);
  }

  componentDidUpdate() {
    if (this.props.token) {
      this.props.navigation.navigate('map');
    }
  }

  onSlidesComplete = () => {
    this.props.navigation.navigate('auth');
  };

  render() {
    return !this.props.appReady ? (
      <Spinner />
    ) : (
      <View style={{ flex: 1 }}>
        <Slides data={SLIDE_DATA} onComplete={this.onSlidesComplete} />
      </View>
    );
  }
}

const mapStateToProps = ({ auth, loading }) => ({
  token: auth.token,
  appReady: loading.appReady,
});

export default connect(
  mapStateToProps,
  { initializeApp }
)(WelcomeScreen);
