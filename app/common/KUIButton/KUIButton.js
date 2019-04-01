import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    View,
    Text,
    TouchableHighlight,
    StyleSheet
} from 'react-native';

export default class KUIButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    render() {
        return (
            <View style={[styles.container, {...this.props.style}]}>
                <TouchableHighlight 
                    onPress={this.props.onPress} 
                    underlayColor={Color_Main_Dark_Color} 
                    style={[styles.button, {backgroundColor: this.props.disabled == false ? Color_Main_Color : Color_BG}]}
                    disabled={this.props.disabled}
                >
                    <Text style={[styles.name, {color: this.props.disabled == false ? Color_Text_Black : Color_Text_Gray}]}>{this.props.name}</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

KUIButton.propTypes = {
    disabled: PropTypes.bool.isRequired,
}
KUIButton.defaultProps = {
    disabled: false
};

const styles = StyleSheet.create({
    container: {
        width: SCREEN_WIDTH - setSpText(60),
        height: setSpText(75),
    },
    button: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: setSpText(75),
        borderRadius: 3,
    },
    name: {
        fontSize: FONT_SIZE(12),
        fontWeight: '100',
    }
});