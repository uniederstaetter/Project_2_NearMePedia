import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import NearMePediaScreen from './NearMePediaScreen';

const stackRoutes = {
    NearMePedia: NearMePediaScreen,
};
const stackOptions = {
    initialRouteName: 'NearMePedia'
};

const StackNavigator = createStackNavigator(stackRoutes, stackOptions)

const AppContainer = createAppContainer(StackNavigator);

export default class App extends React.Component {

    render() {

        return (
            <AppContainer
            />
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
