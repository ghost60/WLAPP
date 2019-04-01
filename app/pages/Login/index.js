import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    TouchableHighlight,
    TouchableOpacity,
    Picker,
    StyleSheet
} from 'react-native';
import BaseContainer from '../../common/Base/BaseContainer'
// import ActionSheet from 'react-native-actionsheet'
// const share_icon = require('../../assets/image/share_icon@2x.png')
// const share_shark = require('../../assets/image/share_shark_99x27_@2x.png')
const login_close = require('../../assets/image/login_close.png')


export default class Login extends Component {

    _onClose = ()=>{
        debugger
        this.props.navigation.goBack()
    }

    // // 更多登录方式
    // _onMoreLogin = ()=>{
    //     this.ActionSheet.show()
    // }

    // 弹框
    // _onActionSheet = (index)=>{
    //     if (index == 0) {
    //         this.props.navigation.navigate('Register', {'mode': 'push'})
    //     } else if (index == 1) {
    //         this.props.navigation.navigate('Login2', {'mode': 'push'})
    //     }
    // }
    _onLogin=()=>{
        this.props.navigation.navigate('Home')
    }
    render() {
        return (
            <BaseContainer 
                navigation={this.props.navigation} 
                hasHeader={false}
                statusColor={Color_T3_White}
                style={styles.container}
            >
                <View style={styles.top}>
                    <TouchableOpacity onPress={this._onClose} style={styles.closePress}>
                        <Image source={login_close}/>
                    </TouchableOpacity>
                    {/* <Image source={share_icon} style={styles.icon}/> */}
                    {/* <Image source={share_shark} resizeMode={'contain'} style={styles.title}/> */}
                </View>
                <View style={styles.bottom}>
                    <TouchableHighlight onPress={this._onLogin} activeOpacity={1.0} underlayColor={Color_Main_Dark_Color} style={styles.login}>
                        <Text style={styles.loginText}>登录</Text>
                    </TouchableHighlight>
                </View>
                {/* <ActionSheet
                    ref={o => this.ActionSheet = o}
                    options={['注册', '手机登录', '取消']}
                    cancelButtonIndex={2}
                    // destructiveButtonIndex={1}
                    onPress={this._onActionSheet}
                /> */}
            </BaseContainer>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        width: SCREEN_WIDTH,
        backgroundColor: Color_T3_White,
        paddingTop: iOS ? STATUS_BAR_HEIGHT : 0,
    }
});