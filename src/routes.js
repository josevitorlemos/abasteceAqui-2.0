import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Login from '~/pages/Login';
import Maps from '~/pages/Mapa';
import Welcome from '~/pages/Welcome'
import Search from '~/pages/Search';

const Routes = (userLogged = false) => createAppContainer(
    createSwitchNavigator({
        Welcome,
        Search,
    }, {
        initialRouteName: userLogged ? 'Search' : 'Welcome',
    }
    ))

export default Routes;