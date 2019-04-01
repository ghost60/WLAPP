import React, { Component } from 'react';
import { View, Image } from 'react-native';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import RootRouter from './RootRouter';
import AuthRouter from './AuthRouter';
// import Splash from '../pages/Splash';

class AuthLoadingScreen extends Component {
  constructor() {
    super();
    // this._bootstrapAsync();
  }
  // _bootstrapAsync = async () => {
  //   // const userToken = await AsyncStorage.getItem('userToken');
  //   const userToken = 'test';
  //   this.props.navigation.navigate(userToken ? 'RootRouter' : 'AuthRouter');
  // };
  componentDidMount() {
    const { navigation } = this.props;
    this.timer = setTimeout(() => {
      // const userToken = await AsyncStorage.getItem('userToken');
      // const userToken = true;
      const userToken = false;
      this.props.navigation.navigate(userToken ? 'RootRouter' : 'AuthRouter');
    }, 2000);
  }

  componentWillUnmount() {
    this.timer && clearTimeout(this.timer);
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Image
          style={{ flex: 1, width: SCREEN_WIDTH, height: SCREEN_HEIGHT }}
          source={require('../assets/image/icon8.png')}
        />
      </View>
    );
  }
}

export default AuthLoadingRouter = createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      RootRouter: RootRouter,
      AuthRouter: AuthRouter
    }, {
      initialRouteName: 'RootRouter'
    }
  )
);
