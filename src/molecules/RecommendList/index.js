import React from 'react';
import {View, Text, Image} from 'react-native';

const RecommendList = ({title, thumbnail}) => {
  return (
    <View style={{width: 108, marginRight: 17}}>
      <Image
        source={{
          uri: thumbnail,
        }}
        style={{
          width: 108,
          height: 139,
          borderRadius: 10,
          borderWidth: 1,
          borderColor: '#FFF',
        }}
      />
      <Text
        style={{
          textAlign: 'center',
          marginTop: 6,
          fontFamily: 'Montserrat-SemiBold',
          color: '#EFEFEF',
        }}
        numberOfLines={2}>
        {title}
      </Text>
    </View>
  );
};

export default RecommendList;
