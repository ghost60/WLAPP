import React, { Component } from 'react';
import {
    Dimensions,
    Image,
    InteractionManager,
    View
} from 'react-native';

var {height, width} = Dimensions.get('window');

class Splash extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const {navigation} = this.props;
        this.timer = setTimeout(() => {
            InteractionManager.runAfterInteractions(() => {
                navigation.navigate('Login')
            });
        }, 2000);
    }

    componentWillUnmount() {
        this.timer && clearTimeout(this.timer);
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <Image
                    style={{flex: 1, width: width, height: height}}
                    source={require('./assets/images/ic_welcome.jpg')}
                />
            </View>
        );
    }
}

export default Splash;