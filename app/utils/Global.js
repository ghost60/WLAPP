import { Dimensions, Platform, PixelRatio, StatusBar } from 'react-native'
// import { DeviceStorage } from './DeviceStorage'
// import { EVENT } from './DeviceEvent'

// 获取屏幕的dp
const screenW = Dimensions.get('window').width;
const screenH = Dimensions.get('window').height;

const fontScale = PixelRatio.getFontScale();
const pixelRatio = PixelRatio.get();

// 高保真的宽度和告诉
const designWidth = 750.0;
const designHeight = 1334.0;

// 根据dp获取屏幕的px
const screenPxW = PixelRatio.getPixelSizeForLayoutSize(screenW);
const screenPxH = PixelRatio.getPixelSizeForLayoutSize(screenH);

const OS = Platform.OS;
const ios = (OS == 'ios');
const android = (OS == 'android');
const isIPhoneX = (ios && screenH == 812 && screenW == 375);
const statusBarHeight = (ios ? (isIPhoneX ? 44 : 20) : StatusBar.currentHeight);
const navigationHeight = statusBarHeight + 44;
const safeAreaBottomHeight = (ios ? (isIPhoneX ? 34 : 0) : 0);
const statusTabBarHeight = safeAreaBottomHeight + 49;

/**
 * 设置text
 * @param size  px
 * @returns {Number} dp
 */
export function setSpText(size) {
    var scaleWidth = screenW / designWidth;
    var scaleHeight = screenH / designHeight;
    var scale = Math.min(scaleWidth, scaleHeight);
    size = Math.round(size * scale / fontScale + 0.5);
    return size;
}
/**
 * 设置高度
 * @param size  px
 * @returns {Number} dp
 */
function scaleSizeW(size) {
    var scaleHeight = size * screenPxH / designHeight;
    size = Math.round((scaleHeight / pixelRatio + 0.5));
    return size;
}
/**
 * 设置宽度
 * @param size  px
 * @returns {Number} dp
 */
function scaleSizeH(size) {
    var scaleWidth = size * screenPxW / designWidth;
    size = Math.round((scaleWidth / pixelRatio + 0.5));
    return size;
}
//dp宽高
global.SCREEN_WIDTH = screenW
global.SCREEN_HEIGHT = screenH
//设置高宽换算
global.scaleSizeW = scaleSizeW
global.scaleSizeH = scaleSizeH
//设置字体换算
global.setSpText = setSpText
//状态栏高
global.STATUS_BAR_HEIGHT = statusBarHeight
//导航栏高
global.NAVIGATION_HEIGHT = navigationHeight
//
global.SAFE_AREA_BOTTOM_HEIGHT = safeAreaBottomHeight
//
global.STATUS_TABBAR_HEIGHT = statusTabBarHeight

global.iOS = ios,
    global.Android = android,
    global.IS_IPHONEX = isIPhoneX

global.Color_F_Blue = '#3296fa'   //强调
global.Color_F_Black = '#333333'  //标题、列表重点文字
global.Color_S1_Black = '#666666' //导航文字
global.Color_S2_Black = '#999999' //副标题
global.Color_S3_Black = '#c1c1c1' //列表附属文字
global.Color_T1_Black = '#dedfe5' //分割线边框
global.Color_T2_Black = '#f8f8f8' //背景色
global.Color_T3_White = '#ffffff' //白背景色