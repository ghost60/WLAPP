import React, { Component } from 'react'
import {
    Text,
    View,
    TouchableOpacity,
    StyleSheet
} from 'react-native'
import Swiper from 'react-native-swiper'

const bannerDate = [
    { title: "深咖我不飞奔VB一日本都市快报的撒" },
    { title: "深咖我不飞奔VB一日本都市快报的撒" },
    { title: "深咖我不飞奔VB一日本都市快报的撒" },
    { title: "深咖我不飞奔VB一日本都市快报的撒" }
]

export default class SwiperComponent extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Swiper
                    horizontal={false}
                    height={200}
                    loop={true}
                    autoplay={true}
                    // removeClippedSubviews={false}
                    // dot={<View style={styles.customDot} />}
                    // activeDot={<View style={styles.customActiveDot} />}
                    // paginationStyle={{
                    //     bottom: 10
                    // }}
                >
                    {bannerDate.map((banner, key) => {
                        return (
                            <TouchableOpacity key={key} activeOpacity={0.75}
                            // onPress={() => { }}
                            >
                                <View><Text>{banner.title}</Text></View>
                            </TouchableOpacity>
                        )
                    })}
                </Swiper>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    customDot: {
        backgroundColor: '#ccc',
        height: 1.5,
        width: 15,
        marginLeft: 2,
        marginRight: 2,
        marginTop: 2,
    },
    customActiveDot: {
        backgroundColor: 'white',
        height: 1.5,
        width: 15,
        marginLeft: 2,
        marginRight: 2,
        marginTop: 2,
    },
    bannerImage: {
        height: 200,
        width: SCREEN_WIDTH,
    },
});