import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

import Home from '../containers/Home/Home'
import College from '../containers/College/College'
import Shop from '../containers/Shop/Shop'
import Data from '../containers/Data/Data'
import Mine from '../containers/Mine/Mine'

import {
  createBottomTabNavigator,
  createStackNavigator
} from 'react-navigation';

const tabbar_detail_n = require('../assets/image/tabbar_detail_n.png')
const tabbar_detail_s = require('../assets/image/tabbar_detail_s.png')
const tabbar_chart_n = require('../assets/image/tabbar_chart_n.png')
const tabbar_chart_s = require('../assets/image/tabbar_chart_s.png')
const tabbar_add_n = require('../assets/image/tabbar_add_n.png')
const tabbar_add_h = require('../assets/image/tabbar_add_h.png')
const tabbar_discover_n = require('../assets/image/tabbar_discover_n.png')
const tabbar_discover_s = require('../assets/image/tabbar_discover_s.png')
const tabbar_mine_n = require('../assets/image/tabbar_mine_n.png')
const tabbar_mine_s = require('../assets/image/tabbar_mine_s.png')


// 获取文本
const navigationTitle = (index)=>{
  if (index == 0) {
    return "首页"
  } else if (index == 1) {
    return "商学院"
  } else if (index == 2) {
    return "商城"
  } else if (index == 3) {
    return "数据中心"
  } else if (index == 4) {
    return "个人中心"
  }
}
// 获取图片
const navigationImage = (index)=>{
  if (index == 0) {
    return [tabbar_detail_n, tabbar_detail_s]
  } else if (index == 1) {
    return [tabbar_chart_n, tabbar_chart_s]
  } else if (index == 2) {
    return [tabbar_add_n, tabbar_add_h]
  } else if (index == 3) {
    return [tabbar_discover_n, tabbar_discover_s]
  } else if (index == 4) {
    return [tabbar_mine_n, tabbar_mine_s]
  }
}

// 导航栏栈配置
const defaultNavigationOptions = (index)=>({
  tabBarIcon: (({tintColor, focused}) => {
    images = navigationImage(index)
    title = navigationTitle(index)
    if (index != 2) {
      return (
        <View style={styles.normalItem}>
          <Image style={styles.normalIcon} source={focused == true ? images[1] : images[0]}/>
          <Text style={styles.normalName}>{title}</Text>
        </View>
      )
    } else {
      return (
        <View style={styles.selectItem}>
          <Image style={styles.selectIcon} source={focused == true ? images[1] : images[0]}/>
          <Text style={styles.selectName}>{title}</Text>
        </View>
      )
    }
  })
})
  

// 不显示默认头部
const navigationOptions = ()=>({
  header: null,
})

const HomeStack = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: navigationOptions()
  }
}, {
  navigationOptions: defaultNavigationOptions(0)
});
const CollegeStack = createStackNavigator({
  College: {
    screen: College,
    navigationOptions: navigationOptions()
  },
}, {
  navigationOptions: defaultNavigationOptions(1)
});
const ShopStack = createStackNavigator({
  Shop: {
    screen: Shop,
    navigationOptions: navigationOptions()
  },
}, {
  navigationOptions: defaultNavigationOptions(2)
});
const DataStack = createStackNavigator({
  Data: {
    screen: Data,
    navigationOptions: navigationOptions()
  },
}, {
  navigationOptions: defaultNavigationOptions(3)
});
const MineStack = createStackNavigator({
  Mine: {
    screen: Mine,
    navigationOptions: navigationOptions()
  }
}, {
  navigationOptions: defaultNavigationOptions(4)
});


const TabbarStack = createBottomTabNavigator(
  {
    Home: HomeStack,
    College: CollegeStack,
    Shop: ShopStack,
    Data: DataStack,
    Mine: MineStack,
  },
  {
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
      showLabel: false,
      lazy: false,
      style: {
        backgroundColor: 'white',
        borderTopColor: 'rgba(230, 230, 230, 1)',
        height:STATUS_TABBAR_HEIGHT - SAFE_AREA_BOTTOM_HEIGHT,
      },
    },
  }
);

export default TabbarStack

const styles = StyleSheet.create({
  normalItem: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: SCREEN_WIDTH / 5,
    marginBottom: 6,
  },
  normalIcon: {
    width: scaleSizeW(50),
    height: scaleSizeW(50),
  },
  normalName: {
    marginTop: 2,
    fontSize: setSpText(8),
    fontWeight: '100',
    color: Color_S1_Black
  },
  selectItem: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: SCREEN_WIDTH / 5,
    marginBottom: 6,
  },
  selectIcon: {
    width: scaleSizeW(140),
    height: scaleSizeW(140),
  },
  selectName: {
    marginTop: 2,
    fontSize: setSpText(8),
    fontWeight: '100',
    color: Color_S1_Black
  },
});