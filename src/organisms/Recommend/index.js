import React from 'react';
import {FlatList, TouchableOpacity, View} from 'react-native';
import {TitleText} from '../../atoms';
import {primary} from '../../colors';
import {RecommendList} from '../../molecules';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const Recommend = ({loading = true, data, onPress = () => {}}) => {
  return (
    <View
      style={{
        backgroundColor: primary,
      }}>
      <TitleText
        style={{
          marginTop: 22,
          marginLeft: 25,
          marginBottom: 17,
          color: '#FFF',
        }}>
        Rekomendasi
      </TitleText>
      {loading ? (
        <SkeletonPlaceholder>
          <View style={{flexDirection: 'row', marginHorizontal: 25}}>
            <View style={{marginRight: 17}}>
              <View style={{width: 108, height: 139, borderRadius: 10}} />
              <View
                style={{width: 108, height: 16, marginTop: 6, borderRadius: 5}}
              />
              <View
                style={{width: 108, height: 16, marginTop: 4, borderRadius: 5}}
              />
            </View>
            <View style={{marginRight: 17}}>
              <View style={{width: 108, height: 139, borderRadius: 10}} />
              <View
                style={{width: 108, height: 16, marginTop: 6, borderRadius: 5}}
              />
              <View
                style={{width: 108, height: 16, marginTop: 4, borderRadius: 5}}
              />
            </View>
          </View>
        </SkeletonPlaceholder>
      ) : (
        <FlatList
          style={{marginHorizontal: 25, flexDirection: 'row'}}
          horizontal={true}
          data={data}
          keyExtractor={(item, index) => `rcm-${index}`}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => {
                onPress(item);
              }}>
              <RecommendList title={item.title} thumbnail={item.thumb} />
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
};

export default Recommend;
