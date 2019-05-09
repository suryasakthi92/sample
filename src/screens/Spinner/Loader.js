'use strict';

import React, { Component } from 'react';
let {
   View,
   Text,
   ActivityIndicator,
   StyleSheet,
    Dimensions
} = require('react-native');
let styles = require('./styles');

export default class Loader extends Component {
    constructor(props) {
        super(props);

        this.state = ({
            deviceWidth : Dimensions.get('window').width,
            deviceHeight : Dimensions.get("window").height
        })
    }

    getDimensions() {
        this.setState({
            deviceWidth : Dimensions.get('window').width,
            deviceHeight : Dimensions.get("window").height
        })
    }

   render() {
      return (
            <View style = {[styles.container, {display: this.props.visible ? "flex":"none",top: (this.props.blockUI ? 0 : this.state.deviceHeight / 2.5),
                right: (this.props.blockUI ? 0 : this.state.deviceWidth/3),
                bottom: (this.props.blockUI ? 0 : this.state.deviceHeight / 2.5),
                left: (this.props.blockUI ? 0 : this.state.deviceWidth/3)} ]} onLayout = {() => this.getDimensions()}>

             <View style={styles.loadingContainer}>

                <View style={styles.spinnerContainer}>
                  <ActivityIndicator
                   animating={true}
                   size={this.props.size}
                   color={this.props.color}
                  />
                    <Text style={[styles.loadingText, {display: this.props.text === undefined ? "none" : 'flex' }]}>{this.props.text}</Text>
                </View>
             </View>
            </View>
      );
   }
};
