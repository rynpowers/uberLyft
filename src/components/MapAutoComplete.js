import React from 'react';
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

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
  item: {
    height: 40,
    borderBottomWidth: StyleSheet.hairlineWidth,
    justifyContent: 'center',
  },
});

const MapAutoComplete = ({
  handleTextChange,
  inputValue,
  locationResults,
  handlePress,
}) => {
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
      {locationResults.map(item => {
        return (
          <TouchableOpacity
            onPress={() => handlePress(item.place_id)}
            style={styles.item}
            key={item.id}
          >
            <Text>{item.description}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default MapAutoComplete;
