import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    View,
    StatusBar,
    StyleSheet
} from 'react-native';
import Navigation from '../Navigation/Navigation'


export default class BaseContainer extends Component {
    _onBackPress = ()=>{
        this.props.navigation.goBack(null);
    }
    _statusBar = ()=>{
        return (
            <StatusBar 
                translucent={false} 
                backgroundColor={this.props.statusColor} 
                barStyle="dark-content"
            />
        )
    }
    render() {
        return (
            <View style={[styles.container, {...this.props.style}]}>
                {this._statusBar()}
                {this.props.hasHeader && <Navigation {...this.props} onBackPress={this._onBackPress}/>}
                {this.props.children}
            </View>
        );
    }
}

BaseContainer.propTypes = {
    // hasHeader: PropTypes.bool.isRequired,       // 是否有导航栏
    // statusColor: PropTypes.string.isRequired,   // 状态栏颜色
}
BaseContainer.defaultProps = {
    hasHeader: true,
    statusColor: Color_T3_White,
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color_T2_Black,
    }
});
