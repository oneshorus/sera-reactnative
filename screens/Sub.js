import React from 'react';
import {View, StyleSheet} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {MovieItem} from '../components';

function SubScreen({route, navigation}) {
  const {movies} = route.params;

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={style.container}>
        {movies?.map((movie, idx) => (
          <MovieItem key={idx} navigation={navigation} movie={movie} />
        ))}
      </View>
    </ScrollView>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
});

export default SubScreen;
