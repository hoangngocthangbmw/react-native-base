import React, { PureComponent } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Ionicons';

class IconPadding extends PureComponent {

    static defaultProps = {
        iconCloseName: 'ios-close'
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
            style={styles.container}>
                <Icon
                    name={this.props.iconCloseName}
                    color='white'
                    size={30}
                />
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 5,
    }
})

export default IconPadding;
