import React, { Component } from 'react';
import { Platform } from 'react-native';

const PlatComponent = (Ios, Android) => class extends Components {
  render() {
    const OS = Platform.OS === 'ios' ? <Ios /> : <Android />
    return(
       {OS}
    )
  }
}

export default PlatComponent