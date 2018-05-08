// @flow

import {
  CREATE_DRAFT_DATE,
} from '../actions/action-types';

const initialState = {
  date: {}
};

export const getWeatherSelector = (state: Object) => ({ ...state.weather });

const dateCreationReducer = (state: Object = initialState, action: Object) => {
  switch (action.type) {
    case CREATE_DRAFT_DATE: {
      return {
        date: {}
      };
    }
    default: {
      return state;
    }
  }
};

export default dateCreationReducer;
