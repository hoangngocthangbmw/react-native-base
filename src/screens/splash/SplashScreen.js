import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import WelcomeScreen from 'libraries/components/AuthTemplate/Airbnb/Welcome/WelcomeScreen';

class SplashScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <WelcomeScreen/>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default SplashScreen;
