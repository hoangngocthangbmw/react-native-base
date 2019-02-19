import React, { Component } from 'react';
import { View, Text, StyleSheet, Platform, SafeAreaView } from 'react-native';
import colors from '../colors';
import { getStatusBarHeight } from 'react-native-iphone-x-helper'

class Container extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={styles.container}>
                {this.props.children}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primaryColor,
        paddingTop: Platform.OS === 'ios' ? getStatusBarHeight() : 0,
        paddingHorizontal: 15
    }
});

export default Container;
