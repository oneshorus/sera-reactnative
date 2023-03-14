import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {IMG_HOST} from '../STATIC';
import ImageError from './ImageError';

function MovieItem({navigation, movie}) {
  const gap = 6;
  const screenWidth = Dimensions.get('window').width;
  const screenOneThirdWidth = Math.floor(screenWidth / 3);
  const imgWidth = screenOneThirdWidth > 200 ? 200 : screenOneThirdWidth; // maxWidth 200
  const imgHeight = Math.floor((imgWidth * 16) / 9);

  const [loadImageError, setloadImageError] = useState(false);

  return (
    <View style={{width: imgWidth, height: imgHeight}}>
      <TouchableOpacity
        onPress={() => navigation?.navigate('Details', {movie})}>
        {!loadImageError ? (
          <Image
            source={{uri: IMG_HOST + movie?.poster_path}}
            style={{
              ...styles.movieImg,
              width: imgWidth - gap,
              height: imgHeight - gap,
            }}
            onError={() => setloadImageError(true)}
          />
        ) : (
          <ImageError
            style={{
              margin: 5,
              width: imgWidth - gap,
              height: imgHeight - gap,
            }}
          />
        )}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  movieImg: {
    margin: 5,
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
});
export default MovieItem;
