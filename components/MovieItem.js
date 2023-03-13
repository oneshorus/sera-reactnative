import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {ActivityIndicator} from 'react-native-paper';
import {IMG_HOST} from '../STATIC';

function MovieItem({navigation, movie}) {
  const gap = 6;
  const screenWidth = Dimensions.get('window').width;
  const screenOneThirdWidth = Math.floor(screenWidth / 3);
  const imgWidth = screenOneThirdWidth > 200 ? 200 : screenOneThirdWidth; // maxWidth 200
  const imgHeight = Math.floor((imgWidth * 16) / 9);

  const [imageError, setImageError] = useState(false);

  return (
    <View style={{width: imgWidth, height: imgHeight}}>
      <TouchableOpacity
        onPress={() => navigation?.navigate('Details', {movie})}>
        {!imageError ? (
          <Image
            source={{uri: IMG_HOST + movie?.poster_path}}
            style={{
              ...styles.movieImg,
              width: imgWidth - gap,
              height: imgHeight - gap,
            }}
            onError={() => setImageError(true)}
          />
        ) : (
          <View
            style={{
              ...styles.movieImg,
              width: imgWidth - gap,
              height: imgHeight - gap,
              ...styles.containerImg,
            }}>
            <View style={styles.containerSpinner}>
              <ActivityIndicator animating={true} />
            </View>
          </View>
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
