import { createStackNavigator, createAppContainer } from 'react-navigation';
import LoginScreen from './Login/LoginScreen';
import WelcomeScreen from './Welcome/WelcomeScreen';
import NameScreen from './Register/NameScreen';
import EmailScreen from './Register/EmailScreen';
import PasswordScreen from './Register/PasswordScreen';
import ForgotPasswordScreen from './ForgotPassword/ForgotPasswordScreen';

const authNavigator = createStackNavigator({
    WelcomeScreen: { screen: WelcomeScreen },
    LoginScreen: {screen: LoginScreen},
    NameScreen: {screen: NameScreen},
    EmailScreen: {screen: EmailScreen},
    PasswordScreen: {screen: PasswordScreen},
    ForgotPasswordScreen: {screen: ForgotPasswordScreen},
},
    {
        headerMode: 'none'
    }
)
const AuthNavigator = createAppContainer(authNavigator);
export default AuthNavigator;
