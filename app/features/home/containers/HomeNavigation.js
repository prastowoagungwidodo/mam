import React from 'react';
import { createStackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';
import HomeContainer from './HomeContainer';
import DetailContainer from 'app/features/detail/containers/DetailContainer';

const HomeNav = createStackNavigator(
    {
        Store: {
            screen: HomeContainer
        },
        Detail: {
            screen: DetailContainer
        }
    },
    {
        initialRouteName: 'Store',
        navigationOptions: ({ navigation }) => ({
            title: 'Home',
            icon: <Icon name='home' size={24} />
        })
    }
);

export default HomeNav;


