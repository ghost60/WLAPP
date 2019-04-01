import React, { Component } from 'react'
import {
    Text,
    View,
    Image,
    TouchableOpacity,
    StyleSheet
} from 'react-native'
import Swiper from 'react-native-swiper'

const bannerDate = [
    { title: "", image: require('../assets/image/swiper_1.jpg') },
    { title: "", image: require('../assets/image/swiper_2.jpg') },
    { title: "", image: require('../assets/image/swiper_3.jpg') },
    { title: "", image: require('../assets/image/swiper_4.jpg') }
]

export default class SwiperComponent extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Swiper
                    height={200}
                    loop={true}
                    autoplay={true}
                    removeClippedSubviews={false} 
                    dot={<View style={styles.customDot} />}
                    activeDot={<View style={styles.customActiveDot} />}
                    paginationStyle={{
                        bottom: 10
                    }}
                >
                    {bannerDate.map((banner,key) => {
                        return (
                            <TouchableOpacity key={key} activeOpacity={0.75}
                                // onPress={() => { }}
                            >
                                <Image
                                    style={styles.bannerImage}
                                    source={banner.image}
                                    // source={{uri:banner.image}}
                                />
                                <Text>{banner.title}</Text>
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