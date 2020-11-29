import React from 'react';
import {View} from 'react-native';
import {TitleText} from '../../atoms';

const Section = ({title, children}) => {
  return (
    <View style={{marginHorizontal: 25, marginTop: 15, marginBottom: 12}}>
      <TitleText style={{color: '#222'}}>{title}</TitleText>
      {children}
    </View>
  );
};

export default Section;
