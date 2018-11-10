import React from 'react';
import { Card } from 'react-native-elements';
import { Text } from 'react-native';

const DeckCard = ({ ride, image, priceAdjust }) => {
  let { type, min, max, time, distance } = ride;

  [min, max] = priceAdjust ? [min / 100, max / 100] : [min, max];

  return (
    <Card title={type} image={image}>
      <Text style={{ marginBottom: 10 }}>{`Price: $${min.toFixed(
        2
      )} - $${max.toFixed(2)}`}</Text>
      <Text style={{ marginBottom: 10 }}>
        {`Estimated Time: ${parseInt(time / 60, 10)} minutes`}
      </Text>
      <Text style={{ marginBottom: 10 }}>{`Distance: ${distance} miles`}</Text>
    </Card>
  );
};

export default DeckCard;
