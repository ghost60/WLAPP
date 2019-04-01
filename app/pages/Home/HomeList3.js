import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
} from 'react-native';
import Panel from '../../common/Panel'


const tProps = {
    list: [
        { id: 1, title: "不是这件事很难，而是每件事都难", address: 1 },
        { id: 2, title: "稳食姐，犯法啊", address: 2 },
        { id: 3, title: "夜半诉心声，何须太高清", address: 3 },
        { id: 4, title: "失恋唱情歌，即是漏煤气关窗", address: 4 },
    ],
}

export default class HomeList3 extends Component {
    render() {
        return (
            <View>
                <View style={styles.container}>
                    <Text>test</Text>
                </View>
                <View style={styles.container}>
                    <Text>test</Text>
                </View>
                <View style={styles.container}>
                    <Text>test</Text>
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
    },
    leftImage: {
        width: 60,
        height: 60,
    },
    reightImage: {
        width: 60,
        height: 60,
    },
    listView: {
        height: 60,
        width: SCREEN_WIDTH - 60 - 60,
    }
});














