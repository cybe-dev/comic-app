import React from 'react';
import {Text} from 'react-native';

const SubtitleText = ({children, style}) => {
  return (
    <Text
      style={[
        {
          fontFamily: 'Roboto-Regular',
          color: '#555',
          marginTop: 2,
        },
        style,
      ]}>
      {children}
    </Text>
  );
};

export default SubtitleText;
