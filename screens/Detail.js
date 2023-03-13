import React, {useState} from 'react';
import {StyleSheet, Text, View, Dimensions, Image} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {ActivityIndicator} from 'react-native-paper';

import {IMG_HOST, BACKDROP_HOST} from '../STATIC';

function DetailsScreen({route}) {
  const {movie} = route.params;

  const releaseYear = movie?.release_date
    ? new Date(movie?.release_date).getFullYear()
    : '-';

  const screenWidth = Dimensions.get('window').width;
  const imgHeight = Math.floor((screenWidth * 9) / 16);

  const [imageError, setImageError] = useState(false);
  const [iconError, setIconError] = useState(false);

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        {!imageError ? (
          <Image
            source={{uri: BACKDROP_HOST + movie?.backdrop_path}}
            style={{
              width: screenWidth,
              height: imgHeight,
            }}
            onError={() => setImageError(true)}
          />
        ) : (
          <View
            style={{
              width: screenWidth,
              height: imgHeight,
              ...styles.containerImg,
            }}>
            <View style={styles.containerSpinner}>
              <ActivityIndicator animating={true} />
            </View>
          </View>
        )}

        <View style={styles.containerDetail}>
          <View style={styles.containerIcon}>
            {!iconError ? (
              <Image
                source={{uri: IMG_HOST + movie?.poster_path}}
                style={styles.containerIcon}
                onError={() => setIconError(true)}
              />
            ) : (
              <View
                style={{
                  ...styles.containerIcon,
                  ...styles.containerImg,
                }}>
                <View style={styles.containerSpinner}>
                  <ActivityIndicator animating={true} />
                </View>
              </View>
            )}
          </View>

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
        </View>
        <Text style={styles.summary}>{movie?.overview}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  containerImg: {
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 4,
  },
  containerSpinner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerDetail: {
    marginVertical: 10,
    marginHorizontal: 5,
    flex: 1,
    flexDirection: 'row',
    gap: 10,
  },
  containerIcon: {
    width: 50,
    // height: (100 * 16) / 9,
    aspectRatio: 3 / 4,
  },
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
    backgroundColor: '#000000',
    marginHorizontal: 5,
  },
  summary: {
    marginHorizontal: 5,
  },
});

export default DetailsScreen;
