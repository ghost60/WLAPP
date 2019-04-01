import React from 'react';
import { createStackNavigator } from 'react-navigation';
import Login from '../pages/Login';

export default AuthRouter = createStackNavigator(
  {
    Login: {
      screen: Login,
      navigationOptions: () => ({
        header: null
      })
    }
  }
);
