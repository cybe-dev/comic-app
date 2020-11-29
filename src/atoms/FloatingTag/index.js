import React from 'react';
import {Text, View} from 'react-native';
import {primary} from '../../colors';

const FloatingTag = ({children}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginHorizontal: 25,
        marginTop: -18,
      }}>
      <View
        style={{
          backgroundColor: '#FFF',
          alignItems: 'center',
          justifyContent: 'center',
          height: 36,
          paddingHorizontal: 27,
          borderRadius: 10,
          elevation: 2,
        }}>
        <Text style={{fontFamily: 'Poppins-SemiBold', color: primary}}>
          {children}
        </Text>
      </View>
    </View>
  );
};

export default FloatingTag;
