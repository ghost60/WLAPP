import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    Image,
    ImageBackground,
    TouchableOpacity
} from 'react-native';

const topic = [
    {
        title: '岁末清扫有它们，体验大不同',
        describe: '更轻松、更美好的大扫除攻略',
        image: '../../assets/image/swiper_1.jpg',
    },
    {
        title: '新年一点红，幸运一整年',
        describe: '那些让你“红”运当头的好物',
        image: '../../assets/image/swiper_1.jpg',
    }
]
export default class HomeList4 extends Component {
    renderTopicItem = (item,index) => {
        debugger
        return (
            <TouchableOpacity 
                key={index}
                style={styles.topicItem}
                activeOpacity={0.75}
            >
            <Text style={styles.topicDesc}>{item.describe}</Text>
                {/* <ImageBackground
                    source={require('../../assets/image/swiper_1.jpg')}
                    style={styles.topicImg}
                >
                    <View style={styles.topicContainer}>
                        <View style={styles.topicText}>
                            <Text style={styles.topicTitle}>{item.title}</Text>
                            <Text style={styles.topicDesc}>{item.describe}</Text>
                        </View>
                    </View>
                </ImageBackground> */}
            </TouchableOpacity>
        )
    }
    render() {
        return (
            <View>
                <View style={styles.topic}>
                    {topic.map((item,index)=>{
                        this.renderTopicItem(item,index)
                    })}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    topic: {
        width: SCREEN_WIDTH,
        alignItems: 'center',
        backgroundColor: '#fff',
        // paddingBottom: 10,
        // marginBottom: 10,
    },
    topicItem: {
        width: SCREEN_WIDTH,
        marginLeft: scaleSizeW(20),
        marginRight: scaleSizeW(20),
        marginBottom: 10,
    },
    topicImg: {
        width: SCREEN_WIDTH * 0.75,
        height: scaleSizeW(240),
        // marginLeft: scaleSizeW(20),
        // marginRight: scaleSizeW(20),
        borderWidth: 0.5,
        borderColor: '#cdcdcd',
    },
    topicContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    topicTitle: {
        fontSize: 16,
        color: Color_T3_White,
    },
    topicDesc: {
        fontSize: 13,
        color: Color_T3_White,
        marginTop: 3,
    },
});














