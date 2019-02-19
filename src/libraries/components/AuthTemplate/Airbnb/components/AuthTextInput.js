import React, { PureComponent } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import PropTypes from 'prop-types';


class AuthTextInput extends PureComponent {

    static propTypes = {
        title: PropTypes.string.isRequired,
        style: PropTypes.object,
        value: PropTypes.string,
        onChangeText: PropTypes.func
    }

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View>
                <Text style={[styles.titleTextInput, this.props.style]}>{this.props.title}</Text>

                <TextInput
                    onChangeText={this.props.onChangeText}
                    value={this.props.value}
                    style={styles.textInputStyle} />
            </View>
        );
    }
}


const styles = StyleSheet.create({
    

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


export default AuthTextInput;
