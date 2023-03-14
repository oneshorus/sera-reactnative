import React, {useLayoutEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {ScrollView, View, Image, StyleSheet} from 'react-native';
import {Searchbar} from 'react-native-paper';

import {SmallIconDetail} from '../components';

import {fetchMoviesSearch, fetchMoviesSearchCancelLed} from '../redux/actions';
import {TouchableOpacity} from 'react-native-gesture-handler';

const SearchScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const movies = useSelector(state => state?.movies);

  const [searchQuery, setSearchQuery] = useState(movies?.searchWords || '');

  const onChangeSearch = query => setSearchQuery(query);

  useLayoutEffect(() => {
    if (!searchQuery) {
      if (movies?.search?.length > 0) {
        dispatch(fetchMoviesSearch(searchQuery));
      }
    } else dispatch(fetchMoviesSearch(searchQuery));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery]);

  return (
    <>
      <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
        loading={movies?.searchLoading}
        mode="view"
        icon={() => (
          <Image
            source={require('../assets/arrow-left.png')}
            style={styles.icon}
          />
        )}
        clearIcon={() =>
          searchQuery && (
            <Image
              source={require('../assets/close.png')}
              style={styles.icon}
            />
          )
        }
        onIconPress={() => {
          dispatch(fetchMoviesSearchCancelLed());
          navigation.goBack();
        }}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          {movies?.search?.map((movie, idx) => {
            const bg = idx % 2 == 0 ? styles.bgDark : {};
            return (
              <TouchableOpacity
                key={idx}
                onPress={() => navigation?.navigate('Details', {movie})}>
                <SmallIconDetail movie={movie} style={{...styles.gap, ...bg}} />
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
  gap: {
    paddingHorizontal: 5,
    paddingVertical: 5,
  },
  bgDark: {
    backgroundColor: '#EBEBEB',
  },
});

export default SearchScreen;
