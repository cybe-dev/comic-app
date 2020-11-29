import React from 'react';
import {ScrollView, Animated} from 'react-native';
import {primary} from '../../colors';
import {
  ChapterSection,
  DetailHeader,
  GenreSection,
  SinopsisSection,
} from '../../organisms';
import {Alert} from '../../molecules';
import service from '../../service';

const Detail = ({route, navigation}) => {
  const [data, setData] = React.useState({});
  const [loading, setLoading] = React.useState(true);
  const [failed, setFailed] = React.useState(false);
  const {endpoint} = route.params;

  const scrollY = React.useRef(new Animated.Value(0)).current;

  const titleOpacity = scrollY.interpolate({
    inputRange: [0, 120],
    outputRange: [0, 1],
    extrapolate: 'clamp',
  });

  const headerElevation = scrollY.interpolate({
    inputRange: [0, 120],
    outputRange: [0, 5],
    extrapolate: 'clamp',
  });

  const getData = React.useCallback(() => {
    let mounted = true;
    if (endpoint) {
      service
        .get('/manga/detail/' + endpoint)
        .then((response) => {
          if (mounted) {
            setData(response.data);
            setLoading(false);
          }
        })
        .catch((e) => {
          setLoading(false);
          setFailed(true);
        });
    }
    return () => {
      mounted = false;
    };
  }, []);

  React.useEffect(() => {
    getData();
  }, []);

  React.useEffect(() => {
    navigation.setOptions({
      headerTitleStyle: {
        opacity: titleOpacity,
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 16,
      },
      headerStyle: {
        elevation: headerElevation,
        backgroundColor: primary,
        height: 56,
      },
      headerTintColor: '#FFF',
      headerTitle: data?.title,
      headerTitleAlign: 'center',
    });
  }, [data]);
  return (
    <React.Fragment>
      <ScrollView
        style={{backgroundColor: '#F0F0F0', flex: 1}}
        showsVerticalScrollIndicator={false}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {contentOffset: {y: scrollY}},
            },
          ],
          {
            useNativeDriver: false,
          },
        )}>
        <DetailHeader
          loading={loading}
          title={data.title}
          subtitle={data.author}
          status={data.status}
          image={data.thumb}
        />
        <GenreSection data={data.genre_list || []} loading={loading} />
        <SinopsisSection loading={loading}>{data.synopsis}</SinopsisSection>
        <ChapterSection
          data={data.chapter || []}
          loading={loading}
          onPress={(item) => {
            navigation.navigate('Read', {
              endpoint: item.chapter_endpoint,
              chapter: item.chapter_title,
              title: data.title,
            });
          }}
        />
      </ScrollView>
      <Alert
        show={failed}
        title="Oopss.."
        body="Gagal dalam memuat data."
        confirmText="Ulangi"
        onConfirm={() => {
          setFailed(false);
          setLoading(true);
          getData();
        }}
      />
    </React.Fragment>
  );
};

export default Detail;
