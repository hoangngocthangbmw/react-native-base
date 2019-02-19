import React, { PureComponent } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Container from '../components/Container';
import IconPadding from '../components/IconPadding';
import strings from '../strings';
import AuthTextInput from '../components/AuthTextInput';
import ContinueButton from '../components/ContinueButton';
import {connect} from 'react-redux';
import { onUpdateFirstName, onUpdateLastName, onClearUserRegister, onUpdateUserRegister } from '../../redux/actions';

class NameScreen extends PureComponent {
  

  render() {

    const disable = this.props.user.firstName.trim().length === 0 || this.props.user.lastName.trim().length === 0;

    return (
      <Container>
        <View style={styles.header}>

          <IconPadding
            onPress={this.onBackPressed}
            iconCloseName='ios-arrow-back'
          />
        </View>

        <Text style={styles.loginTitleStyle}>{strings.name.what_your_name}</Text>

        <AuthTextInput
          style={{ marginTop: 35 }}
          title={strings.name.first_name}
          value={this.props.user.firstName}
          onChangeText={this.onFirstNameChangedText}
        />

        <AuthTextInput
          style={{ marginTop: 20 }}
          title={strings.name.last_name}
          value={this.props.user.lastName}
          onChangeText={this.onLastNameChangedText}
        />

        <ContinueButton
            disabled={disable}
            onPress={this.onContinuePressed}
        />

      </Container>
    );
  }

  onContinuePressed = () => {
    this.props.navigation.navigate('EmailScreen', { onRegisterSuccess: this.props.navigation.state.params.onRegisterSuccess });
  }

  onFirstNameChangedText = firstName => {
    this.props.onUpdateUserRegister({...this.props.user, firstName})


  }

  onLastNameChangedText = lastName => {
    this.props.onUpdateUserRegister({...this.props.user, lastName})

  }

  onBackPressed = () => {
    this.props.onClearUserRegister();
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
      onClearUserRegister: () => dispatch(onClearUserRegister()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NameScreen);
