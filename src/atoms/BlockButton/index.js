import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

const BlockButton = ({
  children,
  style = {},
  onPress = () => {},
  textStyle = {},
}) => {
  return (
    <TouchableOpacity
      style={[
        {
          height: 36,
          borderRadius: 5,
          justifyContent: 'center',
          alignItems: 'center',
        },
        style,
      ]}
      onPress={onPress}>
      <Text
        style={[
          {
            fontFamily: 'Poppins-SemiBold',
            fontSize: 14,
          },
          textStyle,
        ]}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

export default BlockButton;
