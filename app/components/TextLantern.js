import React, { Component } from "react"
import { View, Image } from "react-native"
import { MarqueeVertical } from 'react-native-marquee-ab';

export default class TextLantern extends Component {
  render() {
    return (
      <View>
        <MarqueeVertical
          textList={[
            { label: '1', value: 'item1:一闪一闪亮晶晶，满天都是小星星' },
            { label: '2', value: 'item2:两只老虎跑的快' },
            { label: '3', value: 'item3:蓝蓝的天上白云飘，白云下面小肥羊儿跑' },
          ]}
          width={218}
          height={30}
          headViews={[
            <Image
              source={require('../assets/image/hot.png')}
              style={{ width: 46, height: 28 }}
            />,
            <Image
              source={require('../assets/image/hot.png')}
              style={{ width: 46, height: 28 }}
            />,
            <Image
              source={require('../assets/image/hot.png')}
              style={{ width: 46, height: 28 }}
            />
          ]}
          delay={2000}
          direction={'up'}
          numberOfLines={1}
          bgContainerStyle={{ backgroundColor: '#ffffff' }}
          textStyle={{ fontSize: 16, color: '#FF0000' }}
          onTextClick={(item) => {
            alert('' + JSON.stringify(item));
          }}
        />
      </View>
    )
  }
}