import React, {Component} from 'react';
import {
    ScrollView,
    StyleSheet, 
    Text,
} from 'react-native';
import ShopNavigation from './ShopNavigation'
import BaseContainer from '../../common/Base/BaseContainer'

const HOME_HEADER_H = setSpText(100)
const scrollH = (SCREEN_HEIGHT - NAVIGATION_HEIGHT - HOME_HEADER_H - STATUS_TABBAR_HEIGHT)

export default class Shop extends Component {
    hasTitleComponent = ()=>{
        return (
            <ShopNavigation/>
        )
    }
    render() {
        return (
                <BaseContainer 
                navigation={this.props.navigation} 
                hasLeft={true}
                hasTitle={false} 
                hasTitleComponent={this.hasTitleComponent}
            >
                <ScrollView 
                    ref={'scroll'}
                    contentContainerStyle={styles.scroll}
                    scrollEnabled={false}
                >
                    <Text>Shop</Text>
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