import React, { Component } from 'react';
import { View, Text, ImageBackground, TextInput } from 'react-native';

class SimpleProfileScreen extends Component {

    //Ref: https://www.google.com/search?q=profile+screen+mobile+ui&source=lnms&tbm=isch&sa=X&ved=0ahUKEwiCpMmTjLTgAhVZdXAKHUKFAgYQ_AUIDigB&biw=1440&bih=724#imgrc=LbBDlEiI89DUfM:
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View>
                <ImageBackground>
                    {/* Header */}
                    <View>

                    </View>

                </ImageBackground>

                {/* Avatar */}
                <View>

                </View>

                <TextInput/>

                <TextInput/>

                <TextInput/>

                <TextInput/>



                <Text> </Text>
            </View>
        );
    }
}

export default SimpleProfileScreen;
