import React, {useEffect} from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';

import {SubMenu} from '../components';

import {
  fetchMoviesNowPlaying,
  fetchMoviesPopular,
  fetchMoviesTopRated,
  fetchMoviesUpComing,
} from '../redux/actions';

function HomeScreen({navigation}) {
  const dispatch = useDispatch();
  const movies = useSelector(state => state.movies);

  useEffect(() => {
    dispatch(fetchMoviesNowPlaying());
    dispatch(fetchMoviesPopular());
    dispatch(fetchMoviesTopRated());
    dispatch(fetchMoviesUpComing());
  }, [dispatch]);

  return (
    <>
      <ScrollView showsVerticalScrollIndicator={false}>
        <SubMenu
          style={{marginTop: 10}}
          title="Up Coming"
          navigation={navigation}
          movies={movies?.upComing}
          loading={movies?.upComingLoading}
        />

        <SubMenu
          style={{}}
          title="Now Playing"
          navigation={navigation}
          movies={movies?.nowPlaying}
          loading={movies?.nowPlayingLoading}
        />

        <SubMenu
          style={{}}
          title="Popular"
          navigation={navigation}
          movies={movies?.popular}
          loading={movies?.popularLoading}
        />

        <SubMenu
          style={{}}
          title="Top Rated"
          navigation={navigation}
          movies={movies?.topRated}
          loading={movies?.topRatedLoading}
        />
      </ScrollView>
    </>
  );
}

export default HomeScreen;
