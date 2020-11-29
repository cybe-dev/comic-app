import React from 'react';
import {Image, View, Animated} from 'react-native';
import {FloatingTag, SubtitleText, TitleText} from '../../atoms';
import {primary} from '../../colors';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const DetailHeader = ({loading = true, title, subtitle, status, image}) => {
  return (
    <React.Fragment>
      <Animated.View
        style={{
          height: 172,
          backgroundColor: primary,
          borderBottomRightRadius: 20,
          borderBottomLeftRadius: 20,
        }}>
        <View
          style={{
            display: loading ? 'flex' : 'none',
          }}>
          <SkeletonPlaceholder>
            <View
              style={{
                flexDirection: 'row',
                marginHorizontal: 25,
                marginTop: 17,
              }}>
              <SkeletonPlaceholder.Item
                width={68}
                height={88}
                borderRadius={5}
              />
              <View style={{marginLeft: 11}}>
                <SkeletonPlaceholder.Item
                  width={150}
                  height={25}
                  borderRadius={5}
                />
                <SkeletonPlaceholder.Item
                  width={100}
                  height={20}
                  borderRadius={5}
                  marginTop={4}
                />
              </View>
            </View>
          </SkeletonPlaceholder>
        </View>
        {!loading && (
          <View
            style={{flexDirection: 'row', marginHorizontal: 25, marginTop: 17}}>
            <Image
              source={{uri: image}}
              style={{
                width: 68,
                height: 88,
                borderRadius: 5,
              }}
            />
            <View style={{marginLeft: 11, flexShrink: 1}}>
              <TitleText
                style={{color: '#FFF', flexShrink: 1}}
                numberOfLines={2}>
                {title}
              </TitleText>
              <SubtitleText style={{color: '#E9E9E9'}}>{subtitle}</SubtitleText>
            </View>
          </View>
        )}
      </Animated.View>
      <FloatingTag>{loading ? '....' : status}</FloatingTag>
    </React.Fragment>
  );
};

export default DetailHeader;
