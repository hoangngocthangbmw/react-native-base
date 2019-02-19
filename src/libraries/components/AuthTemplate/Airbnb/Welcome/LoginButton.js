/**
* @augments {Component<{        iconName:string,        textButton:string.isRequired,        containerStyle:object,        textStyle:object,        onPress:Function,     chiendo: object,   
    >}
*/
import React, { PureComponent } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import IconPadding from '../components/IconPadding';
import Icon from 'react-native-vector-icons/FontAwesome5';
import PropTypes from 'prop-types';
import colors from '../colors';

class LoginButton extends PureComponent {

    static propTypes = {
        iconName: PropTypes.string,
        textButton: PropTypes.string.isRequired,
        containerStyle: PropTypes.object,
        textStyle: PropTypes.object,
        onPress: PropTypes.func,
    }

    constructor(props) {
        super(props);
        this.state = {
        };


    }

    render() {
        return (
            <TouchableOpacity
                onPress={this.props.onPress}
                style={[styles.socialButtonStyle, this.props.containerStyle]}>

                {this._renderIconLeft()}


                <Text style={[styles.textStyle, this.props.textStyle]}>{this.props.textButton}</Text>
            </TouchableOpacity>
        );
    }

    _renderIconLeft = () => {
        if (!this.props.iconName) return null;
        return <View style={{ position: "absolute", left: 20 }}>
            <Icon name={this.props.iconName}
                size={18}
                color={colors.primaryColor}
            />
        </View>
    }
}


const styles = StyleSheet.create({
    socialButtonStyle: {
        marginTop: 12,
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
    }
});

export default LoginButton;
