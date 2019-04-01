import React, {Component} from 'react';
import {
    ScrollView,
    StyleSheet, 
    Text,
} from 'react-native';
import DataNavigation from './DataNavigation'
import BaseContainer from '../../common/Base/BaseContainer'

const HOME_HEADER_H = setSpText(100)
const scrollH = (SCREEN_HEIGHT - NAVIGATION_HEIGHT - HOME_HEADER_H - STATUS_TABBAR_HEIGHT)

export default class Data extends Component {
    render() {
        return (
                <BaseContainer 
                navigation={this.props.navigation} 
                hasLeft={false} 
                title={'数据中心'}
            >
                <ScrollView 
                    ref={'scroll'}
                    contentContainerStyle={styles.scroll}
                    scrollEnabled={false}
                >
                    <Text>Data</Text>
                </ScrollView>
            </BaseContainer>
        );
    }
}

const styles = StyleSheet.create({
    scroll: {
        backgroundColor: '#f8f8f8',
        width: SCREEN_WIDTH,
        height: scrollH,
    }
});