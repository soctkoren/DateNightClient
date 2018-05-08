// @flow

import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './store';
import DateCreationContainer from './containers/date-creation-container';

const store = configureStore({});

const app = () => (
  <Provider store={store}>
    <DateCreationContainer />
  </Provider>
);

export default app;
