import React, { PureComponent } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Container from '../components/Container';
import IconPadding from '../components/IconPadding';
import strings from '../strings';
import AuthTextInput from '../components/AuthTextInput';
import ContinueButton from '../components/ContinueButton';
import DropdownAlert from 'react-native-dropdownalert';
import { onUpdateEmail, onUpdateUserRegister } from '../../redux/actions';
import { connect } from 'react-redux'
class EmailScreen extends PureComponent {


    render() {

        const disable = this.props.user.email.trim().length === 0;

        return (
            <Container>
                <View style={styles.header}>

                    <IconPadding
                        onPress={this.onBackPressed}
                        iconCloseName='ios-arrow-back'
                    />
                </View>

                <Text style={styles.loginTitleStyle}>{strings.email.email_header_title}</Text>


                <AuthTextInput
                    title={strings.email.email_address}
                    style={{ marginTop: 35 }}
                    onChangeText={this.onEmailChangedText}
                    value={this.props.user.email}
                />

                <Text style={{ marginTop: 35, color: 'white', fontSize: 13 }}>
                    {strings.email.receive_email}
                </Text>


                <ContinueButton
                    disabled={disable}
                    onPress={this.onContinuePressed}
                />

                <DropdownAlert ref={ref => this.dropdown = ref} />

            </Container>
        );
    }

    onEmailChangedText = email => {

        this.props.onUpdateUserRegister({...this.props.user, email})
    }

    validateEmail = email => {
        const reg = /^[A-Za-z][a-z0-9_\.]{2,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/;

        return reg.test(email);
    }

    onContinuePressed = () => {

        if (!this.validateEmail(this.props.user.email)) {
            this.dropdown.alertWithType('error', strings.email.error_invalid_email_title, strings.email.error_invalid_email_subtitle);
            return;
        }

        this.props.navigation.navigate('PasswordScreen',  { onRegisterSuccess: this.props.navigation.state.params.onRegisterSuccess })
    }

    onBackPressed = () => {
        this.props.navigation.goBack()
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

export default connect(mapStateToProps, mapDispatchToProps)(EmailScreen);
