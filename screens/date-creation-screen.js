// @flow
import React from 'react';
import { connect } from 'react-redux';
import { createStackNavigator } from 'react-navigation';
import {
  View,
  Text,
} from 'react-native';

import { getWeatherSelector } from '../reducers/date-creation-reducer';

class DateCreationScreen extends React.Component {
  render() {
    return (
      <View>
        <Text>Hello</Text>
      </View>
    );
  }
};

const mapStateToProps = (state: Object) => getWeatherSelector(state);

const mapDispatchToProps = (dispatch: Function) => ({});

connect(
  mapStateToProps,
  mapDispatchToProps,
)(DateCreationScreen);

export default createStackNavigator({
  DateCreation: {
    screen: DateCreationScreen
  },
})
