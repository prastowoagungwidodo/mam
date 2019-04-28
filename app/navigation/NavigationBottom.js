/**
 * Bottom Navigation
 * atau navigasi bawah yang berupa ikon dan text dibawahnya
 * ini digunakan sebagai navigasi utama pada halaman awal
 */
import React from 'react';
import { DefaultTheme, Colors } from 'react-native-paper';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeNav from '../features/home/containers/HomeNavigation';
const BottomNav = createMaterialBottomTabNavigator(
    {
        HomeNavigation: {
            screen: HomeNav,
            navigationOptions: ({ navigation }) => ({
                title: 'Beranda',
                tabBarIcon: ({ tintColor }) => (
                    <Icon color={tintColor} name="home-variant-outline" size={24} />
                )
            })
        },

        HistoryNavigation: {
            screen: HomeNav,
            navigationOptions: ({ navigation }) => ({
                title: 'Riwayat',
                tabBarIcon: ({ tintColor }) => (
                    <Icon color={tintColor} name="history" size={24} />
                )
            })
        },

        AccountNavigation: {
            screen: HomeNav,
            navigationOptions: ({ navigation }) => ({
                title: 'Akun',
                tabBarIcon: ({ tintColor }) => (
                    <Icon color={tintColor} name="account-circle-outline" size={24} />
                )
            })
        },

    },
    {
        initialRouteName: 'HomeNavigation',
        barStyle: { backgroundColor: '#fff', elevation: 8 },
        shifting: false,
        tabStyle: { justifyContent: 'center' },
        activeColor: DefaultTheme.colors.primary,
        inactiveColor: Colors.grey500
    }
);

export default BottomNav;


