import React from 'react';
import {Text, View} from 'react-native';

const ChapterList = ({children}) => {
  return (
    <View
      style={{
        marginTop: 7,
        backgroundColor: '#FFF',
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 18,
      }}>
      <Text style={{fontFamily: 'Roboto-Regular', fontSize: 16, color: '#333'}}>
        {children}
      </Text>
    </View>
  );
};

export default ChapterList;
