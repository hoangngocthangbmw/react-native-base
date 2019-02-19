import React, { Component } from 'react';
import { View, Text, Modal } from 'react-native';
import LoadingManager from './LoadingManager';
import Spinner from 'react-native-spinkit';
import colors from '../AuthTemplate/Airbnb/colors';
import PropTypes from 'prop-types';

const TIME_OUT = 10 * 1000;

export function showLoading() {
    const ref = LoadingManager.getDefault();

    if (!!ref) {
        ref.showLoading();
    }
}

export function hideLoading() {
    const ref = LoadingManager.getDefault();

    if (!!ref) {
        ref.hideLoading();
    }
}

class LoadingModal extends Component {

    static defaultProps = {
        spinnerSize: 40,
        // 'CircleFlip', 'Bounce', 'Wave', 'WanderingCubes', 'Pulse', 'ChasingDots', 'ThreeBounce', 'Circle', '9CubeGrid', 'WordPress', 'FadingCircle', 'FadingCircleAlt', 'Arc', 'ArcAlt'
        spinnerType: 'Circle',
        spinnerColor: colors.white0,
    }

    static propTypes = {
        spinnerSize: PropTypes.number,
        spinnerType: PropTypes.string,
    }

    constructor(props) {
        super(props);
        this.state = {
            isVisible: false
        };
    }


    render() {
        return (
            <Modal
                transparent={true}
                animationType={'fade'}
                style={{ position: "absolute" }}
                visible={this.state.isVisible}
            >
                <View style={{ backgroundColor: 'rgba(0,0,0,0.25)', flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Spinner isVisible={true} size={this.props.spinnerSize} type={this.props.spinnerType} color={this.props.spinnerColor} />
                </View>
            </Modal>
        );
    }

    showLoading = () => {
        this.loadingTimeout = setTimeout(() => {
            this.setState({ isVisible: false })
        }, TIME_OUT);
        this.setState({ isVisible: true })
    }

    hideLoading = () => {
        if(this.loadingTimeout) clearTimeout(this.loadingTimeout)
        this.setState({ isVisible: false })
    }

    componentWillUnmount(){
        if(this.loadingTimeout) clearTimeout(this.loadingTimeout)
    }
}

export default LoadingModal;
