import React from 'react';
import {Animated, RefreshControl, ScrollView} from 'react-native';
import {AllManga, Recommend} from '../../organisms';
import service from '../../service';
import {primary} from '../../colors';

const Home = ({navigation}) => {
  const [recommended, setRecomended] = React.useState([]);
  const [all, setAll] = React.useState([]);
  const [disable, setDisable] = React.useState(false);
  const [page, setPage] = React.useState(1);
  const [refreshing, setRefreshing] = React.useState(false);
  const scrollY = React.useRef(new Animated.Value(0)).current;

  const isCloseToBottom = ({layoutMeasurement, contentOffset, contentSize}) => {
    const paddingToBottom = 1000;
    return (
      layoutMeasurement.height + contentOffset.y >=
      contentSize.height - paddingToBottom
    );
  };

  const headerOpacity = scrollY.interpolate({
    inputRange: [150, 190],
    outputRange: [0, 1],
    extrapolate: 'clamp',
  });

  const detail = ({endpoint}) => {
    navigation.navigate('Detail', {endpoint});
  };

  const getData = async (page = 1, recommended = true, refresh = false) => {
    setDisable(true);
    let recommendedLists, allMangaLists;
    try {
      if (recommended) {
        recommendedLists = await service.get('/recommended');
      }
      allMangaLists = await service.get('/manga/popular/' + page);
    } catch (e) {
      console.log(e);
    }

    if (recommendedLists && recommended) {
      setRecomended(recommendedLists.data.manga_list);
    }
    if (allMangaLists) {
      setPage((data) => page + 1);
      if (refresh) {
        setRefreshing(false);
        setAll(allMangaLists.data.manga_list);
      } else {
        setAll((data) => data.concat(allMangaLists.data.manga_list));
      }
      setDisable(false);
    }
  };

  React.useEffect(() => {
    getData();
  }, []);

  React.useEffect(() => {
    navigation.setOptions({
      headerStyle: {
        opacity: headerOpacity,
      },
      headerTitle: 'Comic App',
      headerTitleAlign: 'center',
      headerTintColor: '#FFF',
      headerBackground: () => (
        <Animated.View
          style={{
            backgroundColor: primary,
            height: '100%',
            opacity: headerOpacity,
            elevation: 5,
          }}
        />
      ),
      headerTransparent: true,
    });
  }, []);

  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: primary,
      }}
      showsVerticalScrollIndicator={false}
      nestedScrollEnabled={true}
      onScroll={Animated.event(
        [
          {
            nativeEvent: {contentOffset: {y: scrollY}},
          },
        ],
        {
          useNativeDriver: false,
          listener: ({nativeEvent}) => {
            if (isCloseToBottom(nativeEvent) && !disable) {
              getData(page, false);
            }
          },
        },
      )}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={() => {
            setRefreshing(true);
            getData(1, true, true);
          }}
        />
      }>
      <AllManga
        data={all}
        loading={!all.length}
        onPress={detail}
        recommended={
          <Recommend
            data={recommended}
            loading={!recommended.length}
            onPress={detail}
          />
        }
      />
    </ScrollView>
  );
};

export default Home;
