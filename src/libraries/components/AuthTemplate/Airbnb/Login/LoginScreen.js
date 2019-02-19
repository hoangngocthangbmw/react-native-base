import React, { PureComponent } from 'react';
import { View, Text, Platform, StyleSheet, TextInput, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import colors from '../colors';
import IconPadding from '../components/IconPadding';
import Icon from 'react-native-vector-icons/Ionicons';
import AuthTextInput from '../components/AuthTextInput';
import Container from '../components/Container';
import ContinueButton from '../components/ContinueButton';

import DropdownAlert from 'react-native-dropdownalert';
import strings from '../strings';

class LoginScreen extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            secureTextEntry: true
        };
    }



    render() {

        const disable = this.state.email.trim().length === 0 || this.state.password.length === 0;
        return (
            <Container style={styles.container}>

                <View style={styles.header}>

                    <IconPadding
                        onPress={this.onBackPressed}
                        iconCloseName='ios-arrow-back'
                    />

                    <Text
                        onPress={this.onForgotPasswordPressed}
                        style={styles.textForgotPasswordStyle}>Forgot password?</Text>
                </View>

                <Text style={styles.loginTitleStyle}>Log in</Text>

                <AuthTextInput
                    style={{ marginTop: 35 }}
                    value={this.state.email}
                    title='Email Address'
                    onChangeText={this.onEmailChangedText}
                />



                <View style={styles.passwordContainerStyle}>
                    <Text style={styles.titleTextInput} >Password</Text>
                    <Text
                        onPress={this.onToggleVisiblePassword}
                        style={{ color: 'white' }}>{this.state.secureTextEntry ? 'Show' : 'Hide'}</Text>
                </View>


                <TextInput
                    onChangeText={this.onPasswordChangedText}
                    secureTextEntry={this.state.secureTextEntry}
                    value={this.state.password}
                    style={styles.textInputStyle} />

                <ContinueButton
                    disabled={disable}
                    onPress={this.onLoginPressed}
                />

                <DropdownAlert ref={ref => this.dropdown = ref} />

            </Container>
        );
    }

    onLoginPressed = () => {
        if (!this.validateEmail(this.state.email)) {
            this.dropdown.alertWithType('error', strings.email.error_invalid_email_title, strings.email.error_invalid_email_subtitle);
            return;
        }

        this.props.navigation.state.params.onLoginSuccess(this.state.email, this.state.password)
    }

    validateEmail = email => {
        const reg = /^[A-Za-z][a-z0-9_\.]{2,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/;

        return reg.test(email);
    }

    onToggleVisiblePassword = () => {
        this.setState({ secureTextEntry: !this.state.secureTextEntry })
    }

    onEmailChangedText = email => {
        this.setState({ email })
    }

    onPasswordChangedText = password => {
        this.setState({ password })
    }

    onForgotPasswordPressed = () => {
        this.props.navigation.navigate('ForgotPasswordScreen')
    }

    onBackPressed = () => {
        this.props.navigation.goBack()
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primaryColor,
        paddingTop: Platform.OS === 'ios' ? 24 : 0,
        paddingHorizontal: 15
    },
    header: {
        paddingTop: 15,
        flexDirection: 'row',
        height: 50,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    textForgotPasswordStyle: {
        color: 'white',
        padding: 5
    },
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

    textInputStyle: {
        width: '100%',
        borderBottomColor: '#F1F1F1',
        color: 'white',
        borderBottomWidth: 0.8,
        height: 40,
        fontSize: 18
    },

    loginTitleStyle: {
        fontSize: 26,
        color: 'white',
        marginTop: 15,
        fontWeight: 'bold'
    },

    titleTextInput: {
        textTransform: 'uppercase',
        color: 'white',
        fontSize: 14
    },

    passwordContainerStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 25
    }
});

export default LoginScreen;
