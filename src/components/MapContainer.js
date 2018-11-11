import React, { Component } from 'react';
import { Button } from 'react-native-elements';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { connect } from 'react-redux';
import { MapView } from 'expo';
import { GoogleAutoComplete } from 'react-native-google-autocomplete';
import {
  getMapRegion,
  selectPlaceThunk,
  openSearch,
  closeSearch,
} from '../actions';
import MapAutoComplete from '../components/MapAutoComplete';
import config from '../../secrets';
import Nav from '../components/Nav';
const { Marker } = MapView;

const styles = StyleSheet.create({
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

class MapContainer extends Component {
  constructor() {
    super();
    this.mapRef = null;
  }

  handlePress = (fn, id) => {
    this.props.selectPlaceThunk({ id, fn });
  };

  componentDidMount() {
    this.mapRef.fitToCoordinates([this.props.start], {
      edgePadding: { top: 0, right: 0, bottom: 0, left: 0 },
      animated: false,
    });
  }

  componentDidUpdate(prevProps) {
    if (this.props.end.latitude !== prevProps.end.latitude) {
      this.mapRef.fitToCoordinates([this.props.start, this.props.end], {
        edgePadding: { top: 100, right: 100, bottom: 100, left: 100 },
        animated: false,
      });
    }
  }

  render() {
    let { start, end, modalOpen } = this.props;

    return (
      <View
        style={{
          flex: 1,
          position: 'relative',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <MapView
          style={styles.map}
          ref={ref => {
            this.mapRef = ref;
          }}
        >
          <Marker key={1} title="Start" coordinate={start} />
          {!!end.latitude && <Marker key={2} title="end" coordinate={end} />}
        </MapView>
        <Button
          title="Search"
          backgroundColor="#2e86de"
          buttonStyle={{ width: 80, borderRadius: 10, marginTop: 20 }}
          onPress={() => this.props.openSearch()}
        />
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
                modalOpen={modalOpen}
                closeSearch={this.props.closeSearch}
              />
            );
          }}
        </GoogleAutoComplete>
        {!!start.latitude && !!end.latitude && (
          <Button
            title="Get Estimates!"
            backgroundColor="rgba(95, 39, 205,0.6)"
            buttonStyle={{ borderRadius: 10, marginBottom: 20 }}
            onPress={() => this.props.navigation.navigate('deck')}
          />
        )}
        <Nav navigation={this.props.navigation} left="map" right="places" />
      </View>
    );
  }
}

const mapStateToProps = ({ map }) => ({
  region: map.region,
  start: map.start,
  end: map.end,
  modalOpen: map.modalOpen,
});

export default connect(
  mapStateToProps,
  { getMapRegion, selectPlaceThunk, openSearch, closeSearch }
)(MapContainer);
