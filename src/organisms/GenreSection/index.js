import React from 'react';
import {Section} from '../../molecules';
import {GenreList} from '../../atoms';
import {FlatList} from 'react-native-gesture-handler';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import {View} from 'react-native';

const GenreSection = ({loading = true, data}) => {
  return (
    <Section title="Genre">
      {loading ? (
        <SkeletonPlaceholder>
          <View style={{marginTop: 7, flexDirection: 'row'}}>
            <View
              style={{width: 100, height: 36, marginRight: 13, borderRadius: 5}}
            />
            <View
              style={{width: 150, height: 36, marginRight: 13, borderRadius: 5}}
            />
          </View>
        </SkeletonPlaceholder>
      ) : (
        <FlatList
          contentContainerStyle={{marginTop: 7, flexDirection: 'row'}}
          data={data}
          horizontal={true}
          keyExtractor={(item, index) => `gs-${index}`}
          renderItem={({item}) => <GenreList>#{item.genre_name}</GenreList>}
        />
      )}
    </Section>
  );
};

export default GenreSection;
