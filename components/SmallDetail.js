import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

function SmallDetail({movie}) {

  const releaseYear = movie?.release_date
    ? new Date(movie?.release_date).getFullYear()
    : '-';

  return (
    <View style={styles.containerTitle}>
      <View style={styles.parentTitle}>
        <Text style={styles.title}>{movie?.original_title}</Text>
      </View>
      <View style={styles.containerRating}>
        <Image
          source={require('../assets/eye.png')}
          style={styles.ratingIcon}
        />
        <Text>{movie?.popularity}</Text>
        <View style={styles.spacer} />
        <Image
          source={require('../assets/star.png')}
          style={styles.ratingIcon}
        />
        <Text>{movie?.vote_average}</Text>
      </View>
      <Text>{releaseYear}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  containerTitle: {
    flex: 1,
  },
  parentTitle: {
    overflow: 'hidden',
    height: 21,
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  containerRating: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 3,
    height: 20,
  },
  ratingIcon: {
    width: 16,
    aspectRatio: 1,
    marginRight: 3,
  },
  spacer: {
    borderRadius: 2,
    width: 4,
    aspectRatio: 1,
    backgroundColor: 'darkgrey',
    marginHorizontal: 5,
  },
});

export default SmallDetail;
