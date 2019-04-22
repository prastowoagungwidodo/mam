import { createStackNavigator, createAppContainer } from 'react-navigation';

import Login from 'app/features/login/containers/LoginContainer';
import BottomNavigation from './NavigationBottom';

const RNApp = createStackNavigator(
    {
        Login: {
            screen: Login,
            navigationOptions: { header: null }
        },
        BottomNavigation: {
            screen: BottomNavigation,
            navigationOptions: { header: null }
        }
    },
    {
        initialRouteName: 'BottomNavigation',
        headerMode: 'none'
    }
);

export default createAppContainer(RNApp);
