import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Login from '~/pages/Login';
import Maps from '~/pages/Mapa';
import Welcome from '~/pages/Welcome'
import Search from '~/pages/Search';

const Routes = createAppContainer(
    createSwitchNavigator({
        Welcome,
        Search,
        Maps
    }))

export default Routes;