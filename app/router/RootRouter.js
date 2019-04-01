import { createStackNavigator,StackViewTransitionConfigs } from 'react-navigation';
import TabbarStack from './TabbarStack'
import Test from '../pages/Test'

const dynamicModalTransition = (transitionProps, prevTransitionProps) => {
  debugger
  var tranParams = transitionProps ? transitionProps.scene.route.params : undefined
  var prevParams = prevTransitionProps ? prevTransitionProps.scene.route.params : undefined
  if ((tranParams && !!tranParams['mode'] && tranParams['mode'] === 'modal') || 
      (prevParams && !!prevParams['mode'] && prevParams['mode'] === 'modal')) {
      if ((tranParams && tranParams['mode'] === 'push') || (prevParams && prevParams['mode'] === 'push')) {
        return StackViewTransitionConfigs.defaultTransitionConfig(transitionProps, prevTransitionProps, false);
      }
      return StackViewTransitionConfigs.defaultTransitionConfig(transitionProps, prevTransitionProps, true);
  } else {
    return StackViewTransitionConfigs.defaultTransitionConfig(transitionProps, prevTransitionProps, false);
  }
};

//不显示默认头部
const navigationOptions = ()=>({
  header: null,
})

const AppRouter = createStackNavigator(
  {
    Tabbar: {
      screen: TabbarStack,
      navigationOptions: navigationOptions()
    },
    Test: {
      screen: Test,
      navigationOptions: navigationOptions()
    },
    // BookDetail: {
    //   screen: BookDetail,
    //   navigationOptions: navigationOptions()
    // }
  },
  {
    transitionConfig: iOS ? dynamicModalTransition : dynamicModalTransition,
    cardOverlayEnabled: true
  }
)

export default AppRouter;