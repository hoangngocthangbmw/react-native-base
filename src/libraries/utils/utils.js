import React from 'react';
import { Platform, Alert, ToastAndroid, Keyboard, Linking } from 'react-native';
import R from 'res/R';

function hideKeyboard() {
    Keyboard.dismiss()
}

export default {
    hideKeyboard,
}



