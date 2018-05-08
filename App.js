// @flow

import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './store';
import { RootStack } from './navigation';

const store = configureStore({});

const app = () => (
  <Provider store={store}>
    <RootStack />
  </Provider>
);

export default app;
