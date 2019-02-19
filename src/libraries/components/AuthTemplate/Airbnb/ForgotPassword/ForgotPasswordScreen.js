import React, { PureComponent } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Container from '../components/Container';
import IconPadding from '../components/IconPadding';
import colors from '../colors';
import strings from '../strings';
import AuthTextInput from '../components/AuthTextInput';
import ContinueButton from '../components/ContinueButton';
import DropdownAlert from 'react-native-dropdownalert';

class ForgotPasswordScreen extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            email: ''
        };
    }

    render() {
        const disable = this.state.email.trim().length === 0;

        return (
            <Container>
                <View style={styles.header}>

                    <IconPadding
                        onPress={this.onBackPressed}
                        iconCloseName='ios-arrow-back'
                    />
                </View>

                <Text style={styles.loginTitleStyle}>{strings.forgotPassword.forgot_header_title}</Text>

                <Text style={{ marginTop: 10, color: 'white', fontSize: 14 }}>
                    {strings.forgotPassword.forgot_subtitle}
                </Text>

                <AuthTextInput
                    title={strings.forgotPassword.email_address}
                    style={{ marginTop: 35 }}
                    onChangeText={this.onEmailChangedText}
                    value={this.state.email}
                />

                <ContinueButton
                    disabled={disable}
                    onPress={this.onContinuePressed}
                />

                <DropdownAlert ref={ref => this.dropdown = ref} />

            </Container>
        );
    }

    onEmailChangedText = email => {
        this.setState({ email })
    }

    validateEmail = email => {
        const reg = /^[A-Za-z][a-z0-9_\.]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/;

        return reg.test(email);
    }

    onContinuePressed = () => {

        if (!this.validateEmail(this.state.email)) {
            this.dropdown.alertWithType('error', strings.email.error_invalid_email_title, strings.email.error_invalid_email_subtitle);
            return;
        }

    }

    onBackPressed = () => {
        this.props.navigation.goBack();
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

export default ForgotPasswordScreen;
