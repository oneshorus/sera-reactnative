/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {Provider as PaperProvider} from 'react-native-paper';
import {Provider} from 'react-redux';
import configureStore from './redux/store';
import {name as appName} from './app.json';

// Configure the store
const store = configureStore();

export default function Main() {
  return (
    <Provider store={store}>
      <PaperProvider>
        <App />
      </PaperProvider>
    </Provider>
  );
}

AppRegistry.registerComponent(appName, () => Main);
