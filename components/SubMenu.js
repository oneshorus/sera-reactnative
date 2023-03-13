import React from 'react';
import {View, StyleSheet} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {ActivityIndicator} from 'react-native-paper';

import {MovieItem, SubTitle} from './index';

function SubMenu({style, title, navigation, movies, loading}) {
  const subTitleHandler = () => navigation.navigate('Sub', {title, movies});

  return (
    <View style={{...styles.section, ...style}}>
      <SubTitle title={title} subHandler={subTitleHandler} />

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {loading ? (
          <ActivityIndicator animating={true} />
        ) : (
          movies?.map((movie, idx) => (
            <MovieItem key={idx} navigation={navigation} movie={movie} />
          ))
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    marginBottom: 15,
  },
  subTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    paddingLeft: 4,
  },
});

export default SubMenu;
