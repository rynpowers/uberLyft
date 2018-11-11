import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

const Nav = ({ navigation, left, right, style }) => {
  return (
    <View
      style={[
        {
          backgroundColor: '#fff',
          height: 60,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderTopWidth: 1,
          borderTopColor: '#d6d7da',
        },
        style,
      ]}
    >
      <TouchableOpacity
        style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        onPress={() => navigation.navigate(left)}
      >
        <Text>{left}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        onPress={() => navigation.navigate(right)}
      >
        <Text>{right}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Nav;
