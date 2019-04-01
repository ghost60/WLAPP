import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
} from 'react-native';

const dataSource = [
    { title: '我的商城', image: require('../../assets/images/h_1_3x.png'), path: 'Test' },
    { title: '团队管理', image: require('../../assets/images/h_2_3x.png'), path: 'Test' },
    { title: '扫码发货', image: require('../../assets/images/h_3_3x.png'), path: 'Test' },
    { title: '我的订单', image: require('../../assets/images/h_4_3x.png'), path: 'Test' },
    { title: '数据中心', image: require('../../assets/images/h_5_3x.png'), path: 'Test' },
    { title: '视频中心', image: require('../../assets/images/h_6_3x.png'), path: 'Test' },
    { title: '素材共享', image: require('../../assets/images/h_7_3x.png'), path: 'Test' },
    { title: '共享课堂', image: require('../../assets/images/h_8_3x.png'), path: 'Test' },
    { title: '防伪查询', image: require('../../assets/images/h_9_3x.png'), path: 'Test' },
    { title: '邀请好友', image: require('../../assets/images/h_10_3x.png'), path: 'Test' }
]

export default class HomeList extends Component {
    render() {
        const { navigation } = this.props
        return (
            <View style={styles.container}>
                <View style={styles.listView}>
                    {dataSource.map((data, key) => {
                        return (
                            <View style={styles.list} key={key}>
                                <TouchableOpacity
                                    activeOpacity={0.75}
                                    onPress={() => navigation.navigate(data.path)}
                                >
                                    <Image
                                        // source={{ uri: rowDate.image }}
                                        source={data.image}
                                        style={styles.image}
                                    />
                                    <Text style={styles.text}>{data.title} </Text>
                                </TouchableOpacity>
                            </View>
                        );
                    })}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color_T3_White,
        width:SCREEN_WIDTH,
        paddingLeft: scaleSizeW(20),
        paddingRight: scaleSizeW(20),
    },
    listView: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
    },
    list: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: scaleSizeW(30),
    },
    image: {
        marginLeft: 8,
        width: scaleSizeW(70),
        height: scaleSizeW(70),
    },
    text: {
        marginTop: scaleSizeW(10),
        color: Color_F_Black,
        fontSize: setSpText(26),
        textAlign: 'center'
    }
});