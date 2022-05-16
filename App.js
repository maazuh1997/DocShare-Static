import React from 'react';
import { SafeAreaView } from 'react-native';
import { Provider } from 'react-redux';
import AppNavigation from './src/Navigation';
import { store } from './src/Store/store';

const App = () => {
  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>

  );
};

export default App;
