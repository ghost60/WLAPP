import React, { Component } from 'react';
import {
    Text,
    View,
    Image,
    ScrollView,
    StyleSheet
} from 'react-native';
// import Panel from '../../common/Panel'
import BaseContainer from '../../common/Base/BaseContainer'
import SwiperImage from '../../common/SwiperImage'
import HomeList from '../../pages/Home/HomeList'
import HomeList2 from '../../pages/Home/HomeList2'
// import HomeList3 from '../../pages/Home/HomeList3'
import HomeList4 from '../../pages/Home/HomeList4'
import HomeList5 from '../../pages/Home/HomeList5'

const searchIcon = require('../../assets/images/home_search_2x.png')
// const searchIcon = require('assets/images/home_search_2x.png')
const mesgIcon = require('../../assets/images/home_mesg_2x.png')

export default class Home extends Component {
    centerComponent = () => {
        return <Text style={styles.titleName}>娃哈哈集团</Text>
    }
    leftComponent = () => {
        return <Image source={searchIcon} style={styles.titleImage} />
    }
    rightComponent = () => {
        return <Image source={mesgIcon} style={styles.titleImage} />
    }
    render() {
        return (
            <BaseContainer
                navigation={this.props.navigation}
                centerComponent={this.centerComponent}
                leftComponent={this.leftComponent}
                rightComponent={this.rightComponent}
            >
                <ScrollView
                    ref={'scroll'}
                    contentContainerStyle={styles.scroll}
                    scrollEnabled={true}
                    alwaysBounceVertical={true}
                >
                    {/* 轮播图 */}
                    <View>
                        <SwiperImage navigation={this.props.navigation} />
                    </View>
                    {/* 功能列表 */}
                    <View style={styles.container}>
                        <HomeList navigation={this.props.navigation} />
                    </View>
                    {/* 通知列表 */}
                    <View style={styles.container}>
                        <HomeList2 navigation={this.props.navigation} />
                    </View>
                    {/* 服务中心 */}
                    <View style={styles.container}>
                        <Image source={require('../../assets/images/home_fw.png')} style={{ width: SCREEN_WIDTH, height: scaleSizeW(24), marginTop: scaleSizeW(40) }} />
                        <HomeList navigation={this.props.navigation} />
                    </View>
                    {/* 最近课程 */}
                    <View style={styles.container}>
                        <Text style={{ fontSize: setSpText(30), color: Color_F_Black, marginLeft: scaleSizeW(10), marginTop: scaleSizeW(50), marginBottom: scaleSizeW(30) }}>最近课程</Text>
                        <HomeList4 />
                    </View>
                    {/* 精选品牌 */}
                    <View>
                        <Image source={require('../../assets/images/home_pinpai.png')} style={{ width: SCREEN_WIDTH, height: scaleSizeW(44), marginTop: scaleSizeW(20), marginBottom: scaleSizeW(20) }} />
                        <HomeList5 />
                    </View>
                </ScrollView>
            </BaseContainer>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color_T3_White,
    },
    titleImage: {
        width: 22,
        height: 22,
    },
    titleName: {
        fontSize: setSpText(36),
        fontWeight: '500',
    }
});