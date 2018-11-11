import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setMapRegionStartThunk } from '../actions';
import Spinner from '../components/Spinner';
import MapContainer from '../components/MapContainer';

class MapScreen extends Component {
  componentDidMount() {
    this.props.setMapRegionStartThunk();
  }
  render() {
    return !this.props.mapReady ? <Spinner /> : <MapContainer />;
  }
}

const mapStateToProps = ({ loading }) => ({
  mapReady: loading.mapReady,
});

export default connect(
  mapStateToProps,
  { setMapRegionStartThunk }
)(MapScreen);
