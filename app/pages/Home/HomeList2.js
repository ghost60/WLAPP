import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
} from 'react-native';
import TextLantern from '../../components/TextLantern'


const tProps = {
    list: [
        { id: 1, title: "不是这件事很难，而是每件事都难", address: 1 },
        { id: 2, title: "稳食姐，犯法啊", address: 2 },
        { id: 3, title: "夜半诉心声，何须太高清", address: 3 },
        { id: 4, title: "失恋唱情歌，即是漏煤气关窗", address: 4 },
    ],
}

export default class HomeList2 extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View>
                    <Image source={require('../../assets/images/home_news.png')} style={styles.leftImage}/>
                </View>
                <View style={styles.listView}>
                    {/* <TextLantern {...tProps} /> */}
                </View>
                <View>
                    <Image source={require('../../assets/image/icon8.png')} style={styles.reightImage}/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
        backgroundColor: 'white',
        paddingTop: 12,
    },
    leftImage: {
        width: scaleSizeW(66),
        height: scaleSizeW(66),
    },
    reightImage: {
        width: scaleSizeW(66),
        height: scaleSizeW(50),
    },
    listView: {
        height: 60,
        width: SCREEN_WIDTH - 60 - 60,
    }
});














