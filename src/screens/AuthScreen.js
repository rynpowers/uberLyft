import React, { Component } from 'react';
import { View, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import { fbLogin } from '../actions';

class AuthScreen extends Component {
  async componentDidMount() {
    await AsyncStorage.removeItem('fb_token');
    this.props.fbLogin();
  }

  componentDidUpdate() {
    if (this.props.token) {
      this.props.navigation.navigate('map');
    }
  }

  render() {
    return <View style={{ flex: 1, backgroundColor: '#000' }} />;
  }
}

const mapStateToProps = ({ auth }) => ({ token: auth.token });

export default connect(
  mapStateToProps,
  { fbLogin }
)(AuthScreen);
