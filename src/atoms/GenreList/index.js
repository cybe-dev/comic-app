import React from 'react';
import {Text, View} from 'react-native';

const GenreList = ({children}) => {
  return (
    <View
      style={{
        marginRight: 13,
        backgroundColor: '#FFF',
        borderRadius: 5,
        paddingHorizontal: 20,
        paddingVertical: 5,
        paddingTop: 7,
      }}>
      <Text
        style={{fontFamily: 'Poppins-Regular', color: '#333', fontSize: 16}}>
        {children}
      </Text>
    </View>
  );
};

export default GenreList;
