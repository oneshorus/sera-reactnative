import React, {useState} from 'react';
import {StyleSheet, Text, View, Dimensions, Image} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

import {ImageError, SmallIconDetail} from '../components';

import {BACKDROP_HOST} from '../STATIC';

function DetailsScreen({route}) {
  const {movie} = route.params;

  const screenWidth = Dimensions.get('window').width;
  const imgHeight = Math.floor((screenWidth * 9) / 16);

  const [loadImageError, setLoadImageError] = useState(false);

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        {!loadImageError ? (
          <Image
            source={{uri: BACKDROP_HOST + movie?.backdrop_path}}
            style={{
              width: screenWidth,
              height: imgHeight,
            }}
            onError={() => setLoadImageError(true)}
          />
        ) : (
          <ImageError
            style={{
              width: screenWidth,
              height: imgHeight,
            }}
          />
        )}

        <SmallIconDetail movie={movie} style={styles.containerDetail} />
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
  containerDetail: {
    marginVertical: 10,
    marginHorizontal: 5,
  },
  summary: {
    marginHorizontal: 5,
  },
});

export default DetailsScreen;
