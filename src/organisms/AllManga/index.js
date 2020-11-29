import React from 'react';
import {
  ActivityIndicator,
  FlatList,
  TouchableOpacity,
  View,
} from 'react-native';
import {TitleText} from '../../atoms';
import {MangaList} from '../../molecules';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import {primary} from '../../colors';

const AllManga = ({
  loading = true,
  data,
  onPress = (item) => {},
  recommended,
  buffering,
  ...props
}) => {
  return (
    <React.Fragment>
      {recommended}
      <View
        style={{
          backgroundColor: '#F0F0F0',
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          marginTop: 30,
          flex: 1,
        }}>
        <TitleText
          style={{
            marginTop: 22,
            marginLeft: 25,
            marginBottom: 22,
          }}>
          Manga Populer
        </TitleText>
        {loading ? (
          <View style={{flex: 1}}>
            <SkeletonPlaceholder>
              <View
                style={{
                  marginHorizontal: 25,
                  backgroundColor: '#FFF',
                  flexDirection: 'row',
                  padding: 8,
                  borderRadius: 10,
                  marginBottom: 12,
                  height: 70,
                }}
              />
              <View
                style={{
                  marginHorizontal: 25,
                  backgroundColor: '#FFF',
                  flexDirection: 'row',
                  padding: 8,
                  borderRadius: 10,
                  marginBottom: 12,
                  height: 70,
                }}
              />
              <View
                style={{
                  marginHorizontal: 25,
                  backgroundColor: '#FFF',
                  flexDirection: 'row',
                  padding: 8,
                  borderRadius: 10,
                  marginBottom: 12,
                  height: 70,
                }}
              />
              <View
                style={{
                  marginHorizontal: 25,
                  backgroundColor: '#FFF',
                  flexDirection: 'row',
                  padding: 8,
                  borderRadius: 10,
                  marginBottom: 12,
                  height: 82,
                }}
              />
              <View
                style={{
                  marginHorizontal: 25,
                  backgroundColor: '#FFF',
                  flexDirection: 'row',
                  padding: 8,
                  borderRadius: 10,
                  marginBottom: 12,
                  height: 70,
                }}
              />
              <View
                style={{
                  marginHorizontal: 25,
                  backgroundColor: '#FFF',
                  flexDirection: 'row',
                  padding: 8,
                  borderRadius: 10,
                  marginBottom: 12,
                  height: 70,
                }}
              />
            </SkeletonPlaceholder>
          </View>
        ) : (
          <FlatList
            data={data}
            keyExtractor={(item, index) => `allmng-${index}`}
            renderItem={({item}) => (
              <TouchableOpacity
                onPress={() => {
                  onPress(item);
                }}>
                <MangaList
                  title={item.title}
                  chapter={item.upload_on}
                  thumbnail={item.thumb}
                />
              </TouchableOpacity>
            )}
            {...props}
          />
        )}
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 10,
          }}>
          <ActivityIndicator size="small" color={primary} />
        </View>
      </View>
    </React.Fragment>
  );
};

export default AllManga;
