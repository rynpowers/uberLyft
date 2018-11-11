import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { MapView } from 'expo';
import { GoogleAutoComplete } from 'react-native-google-autocomplete';
import {
  getMapRegion,
  updateSearchTextThunk,
  updateLocationsThunk,
} from '../actions';
import MapAutoComplete from '../components/MapAutoComplete';
import config from '../../secrets';
const { Marker } = MapView;

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

class MapContainer extends Component {
  onRegionChangeComplete = region => {
    this.props.getMapRegion(region);
  };

  handleChange = (text, fn) => {
    console.log(text, fn);
    this.props.updateSearchTextThunk(text, fn);
  };

  render() {
    const { region, start, searchText, locations } = this.props;
    return (
      <View style={{ flex: 1, position: 'relative' }}>
        <MapView
          style={styles.map}
          region={region}
          onRegionChangeComplete={this.onRegionChangeComplete}
        >
          <Marker key={1} title="Start" coordinate={start} />
        </MapView>
        <GoogleAutoComplete apiKey={config().googleApiKey}>
          {({ handleTextChange, locationResults }) => {
            this.props.updateLocationsThunk(locationResults);
            return (
              <MapAutoComplete
                inputValue={searchText}
                handleTextChange={text =>
                  this.handleChange(text, handleTextChange)
                }
                locationResults={locations}
              />
            );
          }}
        </GoogleAutoComplete>
      </View>
    );
  }
}

const mapStateToProps = ({ map }) => ({
  region: map.region,
  start: map.start,
  searchText: map.searchText,
  locations: map.locations,
});

export default connect(
  mapStateToProps,
  { getMapRegion, updateSearchTextThunk, updateLocationsThunk }
)(MapContainer);
