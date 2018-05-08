import { createStackNavigator } from 'react-navigation';

import DateCreationScreen from '../screens/date-creation-screen';

export const RootStack = createStackNavigator({
  DateCreation: {
    screen: DateCreationScreen
  },
})
