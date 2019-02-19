import { createStackNavigator, createAppContainer } from 'react-navigation';
import AuthNavigator from 'libraries/components/AuthTemplate/Airbnb/AuthNavigator';

const mainStack = createStackNavigator({
    Auth: {screen: AuthNavigator}

},
    {
        headerMode: 'none'
    }
)
const MainNavigation = createAppContainer(mainStack);
export default MainNavigation;
