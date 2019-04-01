import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
// import NavigationBack from './NavigationBack'


export default class Navigation extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.contentLeft}>
                    {this.props.leftComponent()}
                </View>
                <View>
                    {this.props.centerComponent()}
                </View>
                <View style={styles.contentRight}>
                    {this.props.rightComponent()}
                </View>
            </View>
        );
    }
}


Navigation.propTypes = {
    leftComponent: PropTypes.func.isRequired,
    centerComponent: PropTypes.func.isRequired,
    rightComponent: PropTypes.func.isRequired,
}
Navigation.defaultProps = {
    leftComponent: ()=>{return<View />},
    centerComponent: ()=>{return<View />},
    rightComponent: ()=>{return<View />},
    onBackPress: () => {},
};


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: SCREEN_WIDTH,
        height: iOS ? NAVIGATION_HEIGHT : NAVIGATION_HEIGHT - STATUS_BAR_HEIGHT,
        paddingTop: iOS ? STATUS_BAR_HEIGHT : 0,
        backgroundColor: Color_T3_White,
    },
    contentLeft: {
        position: 'absolute',
        left: scaleSizeW(20),
        bottom: -10,
        height: 44,
    },
    contentRight: {
        position: 'absolute',
        right: scaleSizeW(20),
        bottom: -10,
        height: 44,
    }
});
