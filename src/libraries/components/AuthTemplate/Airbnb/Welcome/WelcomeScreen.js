import React, { PureComponent } from 'react';
import { View, Text, StyleSheet, Platform, Image, TouchableOpacity } from 'react-native';

import PropTypes from 'prop-types';
import IconPadding from '../components/IconPadding';
import Icon from 'react-native-vector-icons/FontAwesome5'
import LoginButton from './LoginButton';
import colors from '../colors';
import Container from '../components/Container';
import { connect } from 'react-redux';
import { onClearUserRegister } from '../../redux/actions';
import { showLoading } from 'libraries/components/Loading/LoadingModal';

class WelcomeScreen extends PureComponent {

    static defaultProps = {
        showCloseButton: true
    }

    constructor(props) {
        super(props);
        this.state = {
        };
    }


    _renderIconClose = () => {
        if (this.props.showCloseButton) {
            return <IconPadding />
        }
        return null;
    }

    render() {
        return (

            <Container style={styles.container}>

                <View style={[styles.header, { justifyContent: this.props.showCloseButton ? 'space-between' : 'flex-end' }]}>

                    {this._renderIconClose()}

                    <Text
                        onPress={this.onLoginPressed}
                        style={styles.textLoginStyle}>Login</Text>
                </View>

                <Image
                    source={require('../images/ic_airbnb.png')}
                    style={styles.logoStyle}
                    resizeMode='contain'
                />

                <Text style={styles.textWelcomeStyle}>Welcome to Airbnb</Text>

                <LoginButton

                    onPress={this.onFacebookPressed}
                    iconName='facebook-f'
                    textButton='Continue with Facebook'
                />

                <LoginButton
                    onPress={this.onGooglePressed}
                    iconName='google'
                    textButton='Continue with Google'
                />

                <LoginButton
                    onPress={this.onMobilePressed}
                    iconName='mobile-alt'
                    textButton='Continue with Phone Number'
                />

                <LoginButton
                    onPress={this.onCreateAccountPressed}
                    textStyle={{ color: 'white' }}
                    containerStyle={styles.createAccountStyle}
                    textButton='Create Account'
                />

                <Text style={{ marginTop: 35, color: 'white', fontSize: 13 }}>
                    By tapping Continue, Create Account, I agree to ChienApp's Terms of Service, Privacy Policy.
                </Text>

            </Container>
        );
    }

    onLoginSuccess = (email, password) => {
        alert(email + " - " + password);
    }


    onRegisterSuccess = () => {
        let user = Object.assign({}, this.props.user);
        console.log(user);
        alert('Đăng ký thành công.\n1. Thực hiện reset routers và navigate đến màn mong muốn\n2. Xóa dữ liệu cache')
        this.props.onClearUserRegister()
        this.props.navigation.navigate('WelcomeScreen')
    
    }



    onFacebookPressed = () => {
        alert('onFacebookPressed')
    }

    onGooglePressed = () => {
        alert('onGooglePressed')
    }

    onMobilePressed = () => {
        showLoading()
    }

    onCreateAccountPressed = () => {
        this.props.navigation.navigate('NameScreen', { onRegisterSuccess: this.onRegisterSuccess })
    }

    onLoginPressed = () => {
        this.props.navigation.navigate('LoginScreen', { onLoginSuccess: this.onLoginSuccess })
    }


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primaryColor,

        paddingHorizontal: 15
    },
    header: {
        paddingTop: 15,
        flexDirection: 'row',
        height: 50,
        alignItems: 'center',
    },
    textLoginStyle: {
        color: 'white',
        padding: 5
    },
    logoStyle: {
        height: 40,
        width: 40,
        marginTop: 15,
        tintColor: 'white',
    },
    textWelcomeStyle: {
        color: 'white',
        fontSize: 26,
        marginTop: 15,
        marginBottom: 20,
    },
    createAccountStyle: {
        backgroundColor: colors.primaryColor,
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 19
    }
});


const mapStateToProps = state => {
    return {
        user: state.updateUserRegisterReducer.user,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onClearUserRegister: () => dispatch(onClearUserRegister()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(WelcomeScreen);
