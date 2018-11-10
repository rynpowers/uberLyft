import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { MapView } from 'expo';
import { getMapRegion } from '../actions';
import Spinner from '../components/Spinner';

class MapScreen extends Component {
  componentDidMount() {
    this.props.getMapRegion({
      latitude: 37,
      longitude: -122,
      latitudeDelta: 0.09,
      longitudeDelta: 0.04,
    });
  }
  render() {
    const {
      latitude,
      longitude,
      latitudeDelta,
      longitudeDelta,
    } = this.props.region;

    return !this.props.region.latitude ? (
      <Spinner />
    ) : (
      <View style={{ flex: 1 }}>
        <MapView
          style={{ flex: 1 }}
          region={{ latitude, longitude, latitudeDelta, longitudeDelta }}
        />
      </View>
    );
  }
}

const mapStateToProps = ({ map }) => ({
  region: map.region,
});

export default connect(
  mapStateToProps,
  { getMapRegion }
)(MapScreen);
