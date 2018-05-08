// @flow

import { connect } from 'react-redux';
import DateCreationComponent from '../components/date-creation-component';
import { getWeatherSelector } from '../reducers/date-creation-reducer';

const mapStateToProps = (state: Object) => getWeatherSelector(state);

const mapDispatchToProps = (dispatch: Function) => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DateCreationComponent);
