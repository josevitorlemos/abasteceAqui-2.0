import React, { Component } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import "~/config/ReactotronConfig";

import createNavigator from './routes';

export default class App extends Component {
    state = {
        userCheckd: false,
        userLogged: false,
    };

    async componentDidMount() {
        const username = await AsyncStorage.getItem('@Githuber:username');

        this.setState({
            userCheckd: true,
            userLogged: !!username,
        })

    }

    render() {
        const { userCheckd, userLogged } = this.state;

        if (!userCheckd) return null;

        const Routes = createNavigator(userLogged);

        return <Routes />;

    }
}
