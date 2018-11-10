import React, { Component } from 'react';
import { View, Text, ScrollView, Dimensions } from 'react-native';
import { Button } from 'react-native-elements';

const SCREEN_WIDTH = Dimensions.get('window').width;

const styles = {
  text: {
    fontSize: 30,
    color: '#f7f1e3',
    textAlign: 'center',
  },
  view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: SCREEN_WIDTH,
    padding: 10,
  },
  button: {
    marginTop: 20,
    backgroundColor: '#22a6b3',
  },
};

class Slides extends Component {
  render() {
    return (
      <ScrollView horizontal pagingEnabled style={{ flex: 1 }}>
        {this.props.data.map((slide, i) => {
          return (
            <View
              key={slide.text}
              style={{ ...styles.view, backgroundColor: slide.color }}
            >
              <Text style={styles.text}>{slide.text}</Text>
              {this.props.data.length - 1 === i && (
                <Button
                  title="Get Ride"
                  raised
                  buttonStyle={styles.button}
                  onPress={this.props.onComplete}
                />
              )}
            </View>
          );
        })}
      </ScrollView>
    );
  }
}

export default Slides;

{
}
