import React from 'react';
import {
  View,
  Animated,
  TouchableOpacity,
  FlatList,
  Dimensions,
  StatusBar,
  Text,
  ActivityIndicator,
} from 'react-native';
import service from '../../service';
import AutoHeightImage from 'react-native-auto-height-image';
import ReactNativeZoomableView from '@dudigital/react-native-zoomable-view/src/ReactNativeZoomableView';
import {primary} from '../../colors';

const Read = ({route, navigation}) => {
  const {endpoint, title, chapter} = route.params;
  const [images, setImages] = React.useState([]);
  const [loading, setLoding] = React.useState(true);
  const [failed, setFailed] = React.useState(false);
  const [showHeader, setShowHeader] = React.useState(true);
  const opacityAnimTitle = React.useRef(new Animated.Value(1)).current;
  const opacityAnimBg = React.useRef(new Animated.Value(0.7)).current;

  const timeoutFadeHeader = (callback = () => {}, timing = 2000) => {
    let mounted = true;

    const timer = setTimeout(() => {
      if (mounted) {
        Animated.timing(opacityAnimBg, {
          toValue: 0,
          duration: 500,
          useNativeDriver: false,
        }).start(() => {
          setShowHeader(false);
        });
        Animated.timing(opacityAnimTitle, {
          toValue: 0,
          duration: 500,
          useNativeDriver: false,
        }).start();
      }
    }, timing);

    callback();

    return () => {
      mounted = false;
      clearTimeout(timer);
    };
  };

  const triggerShowHeader = () => {
    setShowHeader(true);
    Animated.timing(opacityAnimTitle, {
      toValue: 1,
      duration: 300,
      useNativeDriver: false,
    }).start(() => timeoutFadeHeader(() => {}, 8000));
    Animated.timing(opacityAnimBg, {
      toValue: 0.7,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  const getData = React.useCallback(() => {
    let mounted = true;
    service
      .get(`/chapter/${endpoint}`)
      .then((response) => {
        if (mounted) {
          setImages(response.data.chapter_image);
          setLoding(false);
        }
      })
      .catch((e) => {
        if (mounted) {
          setFailed(true);
        }
      });

    return () => {
      mounted = false;
    };
  }, []);

  React.useEffect(
    () =>
      timeoutFadeHeader(() => {
        navigation.setOptions({
          headerStyle: {
            opacity: opacityAnimTitle,
          },
          headerTitle: 'Read',
          headerTitleAlign: 'center',
          headerTintColor: '#FFF',
          headerBackground: () => (
            <Animated.View
              style={{
                backgroundColor: '#000',
                height: '100%',
                opacity: opacityAnimBg,
                elevation: 5,
              }}
            />
          ),
          headerTransparent: true,
          headerTitle: () => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Text
                style={{
                  fontFamily: 'Montserrat-Bold',
                  fontSize: 18,
                  color: '#FFF',
                }}
                numberOfLines={1}>
                {title}
              </Text>
              <Text style={{color: '#FFF', fontFamily: 'Roboto-Regular'}}>
                {chapter}
              </Text>
            </View>
          ),
        });
      }),
    [],
  );

  React.useEffect(() => {
    getData();
  }, []);

  React.useEffect(() => {
    navigation.setOptions({
      headerShown: showHeader,
    });
  }, [showHeader]);

  return (
    <React.Fragment>
      <StatusBar backgroundColor="#000" />
      {loading ? (
        <TouchableOpacity
          activeOpacity={1}
          style={{flex: 1}}
          onPress={() => {
            triggerShowHeader();
            if (failed) {
              setFailed(false);
              getData();
            }
          }}>
          <View
            style={{
              flex: 1,
              backgroundColor: '#F0F0F0',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            {failed ? (
              <Text
                style={{
                  fontFamily: 'Roboto-Regular',
                  fontSize: 16,
                  marginHorizontal: 25,
                  textAlign: 'center',
                }}>
                Gagal mengambil data, ketuk untuk mengulangi.
              </Text>
            ) : (
              <ActivityIndicator size="large" color={primary} />
            )}
          </View>
        </TouchableOpacity>
      ) : (
        <ReactNativeZoomableView
          maxZoom={1.5}
          minZoom={1}
          zoomStep={0.5}
          initialZoom={1}
          bindToBorders={true}
          style={{
            flex: 1,
            backgroundColor: '#FOFOFO',
          }}>
          <FlatList
            data={images}
            keyExtractor={(item, index) => `image-${index}`}
            renderItem={({item, index}) => (
              <TouchableOpacity
                activeOpacity={1}
                onPress={() => triggerShowHeader()}>
                <AutoHeightImage
                  source={{uri: item.chapter_image_link}}
                  width={Dimensions.get('window').width}
                />
              </TouchableOpacity>
            )}
          />
        </ReactNativeZoomableView>
      )}
    </React.Fragment>
  );
};

export default Read;
