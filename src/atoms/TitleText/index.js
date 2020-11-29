import React from 'react';
import {Text} from 'react-native';

const TitleText = ({children, style, ...props}) => {
  return (
    <Text
      {...props}
      style={[
        {
          fontFamily: 'Montserrat-Bold',
          fontSize: 18,
          color: '#111',
        },
        style,
      ]}>
      {children}
    </Text>
  );
};

export default TitleText;
