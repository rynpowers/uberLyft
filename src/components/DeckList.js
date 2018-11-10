import React from 'react';
import { Dimensions, View, Text } from 'react-native';
import { Card } from 'react-native-elements';
import DeckCard from './DeckCard';
const SCREEN_WIDTH = Dimensions.get('window').width;

const DeckList = ({ lyft, uber }) => {
  return lyft.map((item, i) => (
    <View
      key={i}
      style={{
        width: SCREEN_WIDTH,
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        flex: 1,
      }}
    >
      <DeckCard ride={uber[i]} image={require('../../assets/Uber.png')} />
      <DeckCard
        ride={item}
        image={require('../../assets/lyft.png')}
        priceAdjust
      />
    </View>
  ));
};

export default DeckList;
