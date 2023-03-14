import 'react-native-gesture-handler';
import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {HomeScreen, DetailsScreen, SubScreen, SearchScreen} from './screens';
import {Loop} from './components';

const Stack = createStackNavigator();

function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={({navigation, route}) => ({
              headerTitle: 'SERAMovie',
              headerRight: () => <Loop navigation={navigation} />,
            })}
          />
          <Stack.Screen
            name="Details"
            component={DetailsScreen}
            options={({navigation, route}) => ({
              headerRight: () => <Loop navigation={navigation} />,
            })}
          />
          <Stack.Screen
            name="Search"
            component={SearchScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Sub"
            component={SubScreen}
            options={({navigation, route}) => ({
              title: route.params?.title || 'Movie',
              headerRight: () => <Loop navigation={navigation} />,
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
