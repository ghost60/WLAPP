import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';

export default class Panel extends Component {

  render() {
    const { title, children } = this.props
    return (
      <View style={styles.container}>
        {
          title &&
          <View style={styles.title}>
            <View style={styles.titleIcon}>
            </View>
            <Text style={styles.titlName}>{title}</Text>
          </View>
        }
        {children}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'row',
    marginBottom: 6,
  },
  title: {
    flexDirection: 'row',
  },
  titleIcon:{
    width:3,
    height:16,
    backgroundColor:'red',
    marginRight: 6,
  },
  titlName:{
    fontSize: 14,
  }
})