import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import Container from '../components/Container';
import strings from '../strings';
import ContinueButton from '../components/ContinueButton';
import IconPadding from '../components/IconPadding';
import { onUpdatePassword, onUpdateUserRegister } from '../../redux/actions';
import {connect} from 'react-redux'

class PasswordScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            secureTextEntry: true,
        };
    }

    render() {

        const disable = this.isDisableContinueButton();

        return (
            <Container>
                <View style={styles.header}>

                    <IconPadding
                        onPress={this.onBackPressed}
                        iconCloseName='ios-arrow-back'
                    />
                </View>

                 <Text style={styles.loginTitleStyle}>{strings.password.password_header_title}</Text>

                <Text style={{ marginTop: 10, color: 'white', fontSize: 14 }}>
                    {strings.password.password_subtitle}
                </Text>

                <View style={styles.passwordContainerStyle}>
                    <Text style={styles.titleTextInput}>{strings.password.password}</Text>
                    <Text
                        onPress={this.onToggleVisiblePassword}
                        style={{ color: 'white' }}>{this.state.secureTextEntry ? 'Show' : 'Hide'}</Text>
                </View>


                <TextInput
                    onChangeText={this.onPasswordChangedText}
                    secureTextEntry={this.state.secureTextEntry}
                    value={this.props.user.password}
                    style={styles.textInputStyle} />

                <ContinueButton
                    disabled={disable}
                    onPress={this.onContinuePressed}
                />

            </Container>
        );
    }

    isDisableContinueButton = () => {
        if(this.props.user.password.length < 6) return true;
        if(this.props.user.password.trim().length === 0) return true;
        return false;
        
    }

    onBackPressed = () => {
        this.props.navigation.goBack()
    }

    onContinuePressed = () => {
        this.props.navigation.state.params.onRegisterSuccess()
    }

    onToggleVisiblePassword = () => {
        this.setState({ secureTextEntry: !this.state.secureTextEntry })
    }

    onPasswordChangedText = password => {
        this.props.onUpdateUserRegister({...this.props.user, password})
    }
}
const styles = StyleSheet.create({
    header: {
        paddingTop: 15,
        flexDirection: 'row',
        height: 50,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    loginTitleStyle: {
        fontSize: 26,
        color: 'white',
        marginTop: 15,
        fontWeight: 'bold'
    },

    textForgotPasswordStyle: {
        color: 'white',
        padding: 5
    },
    passwordContainerStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 25
    },

    textInputStyle: {
        width: '100%',
        borderBottomColor: '#F1F1F1',
        color: 'white',
        borderBottomWidth: 0.8,
        height: 40,
        fontSize: 18
    },


    titleTextInput: {
        textTransform: 'uppercase',
        color: 'white',
        fontSize: 14
    },

});


const mapStateToProps = state => {
    return {
        user: state.updateUserRegisterReducer.user,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onUpdateUserRegister: (user) => dispatch(onUpdateUserRegister(user)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PasswordScreen);
