import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setMapRegionStartThunk } from '../actions';
import Spinner from '../components/Spinner';
import MapContainer from '../components/MapContainer';

class MapScreen extends Component {
  static navigationOptions = () => {
    return {
      header: null,
    };
  };

  componentDidMount() {
    this.props.setMapRegionStartThunk();
    console.log('COMPONENT DID MOUNT');
  }

  componentDidUpdate(props) {
    if (!this.props.mapReady) this.props.setMapRegionStartThunk();
  }
  render() {
    return !this.props.mapReady ? (
      <Spinner />
    ) : (
      <MapContainer navigation={this.props.navigation} />
    );
  }
}

const mapStateToProps = ({ loading }) => ({
  mapReady: loading.mapReady,
});

export default connect(
  mapStateToProps,
  { setMapRegionStartThunk }
)(MapScreen);
