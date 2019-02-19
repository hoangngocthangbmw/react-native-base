import React, { PureComponent } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import colors from '../colors';
import PropTypes from 'prop-types';

class ContinueButton extends PureComponent {
   

    static propTypes = {
        disabled: PropTypes.bool,
        onPress: PropTypes.func,

    }
   
    static defaultProps = {
        disabled: false,
    }

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <TouchableOpacity
                disabled={this.props.disabled}
                onPress={this.props.onPress}
                style={[styles.socialButtonStyle, {
                    backgroundColor: this.props.disabled ? '#78a0a3' : 'white'
                }]}>

                <Text style={[styles.textStyle, {
                    color: this.props.disabled ? '#5f8284' : colors.primaryColor
                }]}>Continue</Text>
            </TouchableOpacity>
        );
    }
}


const styles = StyleSheet.create({
    socialButtonStyle: {
        marginTop: 45,
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: 38,
        borderRadius: 19
    },

    textStyle: {
        color: colors.primaryColor,
        fontSize: 16
    },

});

export default ContinueButton;
