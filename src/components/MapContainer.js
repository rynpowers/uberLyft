import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { MapView } from 'expo';
import { GoogleAutoComplete } from 'react-native-google-autocomplete';
import { getMapRegion, selectPlaceThunk } from '../actions';
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

  handlePress = (fn, id) => {
    this.props.selectPlaceThunk({ id, fn });
  };

  render() {
    let { region, start, end } = this.props;

    if (start.latitude && end.latitude) {
      // region = { ...region, latitudeDelta: 0.08, longitudeDelta: 0.08 };
    }

    return (
      <View style={{ flex: 1, position: 'relative' }}>
        <MapView
          style={styles.map}
          region={region}
          onRegionChangeComplete={this.onRegionChangeComplete}
        >
          <Marker key={1} title="Start" coordinate={start} />
          {!!end.latitude && <Marker key={2} title="end" coordinate={end} />}
        </MapView>
        <GoogleAutoComplete apiKey={config().googleApiKey}>
          {({
            inputValue,
            handleTextChange,
            locationResults,
            fetchDetails,
          }) => {
            return (
              <MapAutoComplete
                inputValue={inputValue}
                handleTextChange={handleTextChange}
                locationResults={locationResults}
                handlePress={this.handlePress.bind(this, fetchDetails)}
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
  end: map.end,
});

export default connect(
  mapStateToProps,
  { getMapRegion, selectPlaceThunk }
)(MapContainer);
