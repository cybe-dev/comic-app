import React from 'react';
import {Text, View} from 'react-native';
import {primary} from '../../colors';
import {Section} from '../../molecules';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import {BlockButton} from '../../atoms';

const SinopsisSection = ({loading = true, children = ''}) => {
  const [toggle, setToggle] = React.useState(false);
  return (
    <Section title="Sinopsis">
      <View
        style={{
          backgroundColor: '#FFF',
          borderRadius: 10,
          padding: 18,
          marginTop: 7,
        }}>
        {loading && (
          <SkeletonPlaceholder>
            <View style={{width: '100%', height: 16, borderRadius: 5}} />
            <View
              style={{width: '100%', height: 16, borderRadius: 5, marginTop: 6}}
            />
            <View
              style={{width: '100%', height: 16, borderRadius: 5, marginTop: 6}}
            />
            <View
              style={{width: '70%', height: 16, borderRadius: 5, marginTop: 6}}
            />
          </SkeletonPlaceholder>
        )}
        <Text
          style={{
            fontFamily: 'Roboto-Regular',
            fontSize: 16,
            color: '#333',
            lineHeight: 24,
          }}>
          {toggle ? children : children.substr(0, 150)}
          {children.length > 150 && !toggle && '...'}
        </Text>
        {children.length > 150 && !toggle && (
          <BlockButton
            style={{marginTop: 16, borderColor: primary, borderWidth: 1}}
            onPress={() => {
              setToggle(true);
            }}
            textStyle={{color: primary}}>
            Lihat Detail
          </BlockButton>
        )}
      </View>
    </Section>
  );
};

export default SinopsisSection;
