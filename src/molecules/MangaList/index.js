import React from 'react';
import {View, Text, Image} from 'react-native';
import {SubtitleText} from '../../atoms';

const MangaList = ({title, chapter, thumbnail}) => {
  return (
    <View
      style={{
        marginHorizontal: 25,
        backgroundColor: '#FFF',
        flexDirection: 'row',
        padding: 8,
        borderRadius: 10,
        marginBottom: 12,
      }}>
      <Image
        source={{uri: thumbnail}}
        style={{width: 55, height: 70, borderRadius: 10}}
      />
      <View style={{marginLeft: 13, marginVertical: 3, flexShrink: 1}}>
        <Text
          style={{
            flexShrink: 1,
            fontFamily: 'Montserrat-SemiBold',
            fontSize: 15,
            color: '#333',
          }}
          numberOfLines={2}>
          {title}
        </Text>
        <SubtitleText>{chapter}</SubtitleText>
      </View>
    </View>
  );
};

export default MangaList;
