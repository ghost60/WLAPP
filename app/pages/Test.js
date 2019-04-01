import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import BaseContainer from '../common/Base/BaseContainer'

export default class Test extends Component {
    render() {
        debugger
        const { navigation } = this.props
        return (
            <BaseContainer
                navigation={this.props.navigation}
                hasLeft={true}
                hasTitleComponent={this.hasTitleComponent}
                title={''}
            >
                <View style={{ flex: 1 }}>
                    <TouchableOpacity
                        activeOpacity={0.75}
                        onPress={() => navigation.goBack(null)}
                    >
                        <Text>goBack</Text>
                    </TouchableOpacity>

                </View>
            </BaseContainer>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    }
});