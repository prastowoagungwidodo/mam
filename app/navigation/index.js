/**
 * Main navigations
 * Karena redux dan react-navigation susah diintegrasikan
 * maka disini kami menggunakan referal sesuai dengan dokumentasi
 * react-navigation
 */
import React, { Component } from 'react';
import NavigationStack from './NavigationStack';
import NavigationService from './NavigationService';

class AppNavigator extends Component {
    render() {
        return (
            <NavigationStack
                ref={navigatorRef => {
                    NavigationService.setTopLevelNavigator(navigatorRef);
                }}
            />
        );
    }
}

export default AppNavigator;
