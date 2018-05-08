// @flow

import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './store';
import DateCreationScreen from './screens/date-creation-screen';

const store = configureStore({});

const app = () => (
  <Provider store={store}>
    <DateCreationScreen />
  </Provider>
);

export default app;
