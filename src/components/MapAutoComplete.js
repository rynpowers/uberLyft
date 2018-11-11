import React from 'react';
import { Button } from 'react-native-elements';
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Modal,
} from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;

const styles = StyleSheet.create({
  textInput: {
    height: 40,
    borderWidth: 1,
    paddingLeft: 5,
    backgroundColor: '#eee',
    flex: 1,
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
  modalOpen,
  closeSearch,
}) => {
  return (
    <View>
      <Modal style={{ backgroundColor: '#000', flex: 1 }} visible={modalOpen}>
        <View style={{ backgroundColor: 'rgba(200, 214, 229,0.4)', flex: 1 }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: 20,
              marginLeft: 10,
            }}
          >
            <TextInput
              style={styles.textInput}
              placeholder="Search a Place"
              onChangeText={handleTextChange}
              value={inputValue}
              debounce={500}
              min={5}
            />
            <Button
              title="Close"
              backgroundColor="#2e86de"
              buttonStyle={{ width: 70, borderRadius: 10 }}
              onPress={closeSearch}
            />
          </View>
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
      </Modal>
    </View>
  );
};

export default MapAutoComplete;
