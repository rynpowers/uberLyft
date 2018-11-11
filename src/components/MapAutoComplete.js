import React from 'react';
import { View, TextInput, Text, StyleSheet, Dimensions } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;

const styles = StyleSheet.create({
  textInput: {
    height: 40,
    width: 300,
    borderWidth: 1,
    backgroundColor: '#FFF',
    alignSelf: 'center',
    marginTop: 20,
    paddingLeft: 5,
  },
  textInputView: {
    position: 'absolute',
    top: 0,
    zIndex: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: SCREEN_WIDTH,
  },
});

const MapAutoComplete = ({ handleTextChange, inputValue, locationResults }) => {
  return (
    <View style={styles.textInputView}>
      <TextInput
        style={styles.textInput}
        placeholder="Search a Place"
        onChangeText={handleTextChange}
        value={inputValue}
        debounce={500}
        min={5}
      />
      {locationResults.map((item, i) => (
        <View key={i}>
          <Text>{item.description}</Text>
        </View>
      ))}
    </View>
  );
};

export default MapAutoComplete;
