import React from 'react';
import {FlatList, TouchableOpacity, View} from 'react-native';
import {ChapterList} from '../../atoms';
import {Section} from '../../molecules';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const ChapterSection = ({loading = true, data, onPress = () => {}}) => {
  return (
    <Section title="Chapter">
      {loading ? (
        <SkeletonPlaceholder>
          <View
            style={{
              marginTop: 7,
              borderRadius: 5,
              width: '100%',
              height: 36,
            }}
          />
          <View
            style={{
              marginTop: 7,
              borderRadius: 5,
              width: '100%',
              height: 36,
            }}
          />
          <View
            style={{
              marginTop: 7,
              borderRadius: 5,
              width: '100%',
              height: 36,
            }}
          />
          <View
            style={{
              marginTop: 7,
              borderRadius: 5,
              width: '100%',
              height: 36,
            }}
          />
        </SkeletonPlaceholder>
      ) : (
        <FlatList
          data={data}
          keyExtractor={(item, index) => `cs-${index}`}
          renderItem={({item, index}) => (
            <TouchableOpacity onPress={() => onPress(item)}>
              <ChapterList>{item.chapter_title}</ChapterList>
            </TouchableOpacity>
          )}
        />
      )}
    </Section>
  );
};

export default ChapterSection;
