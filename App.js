import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import NearMePediaScreen from './NearMePediaScreen';
import EnterLocationScreen from "./EnterLocationScreen";
import ResultLocationScreen from './ResultLocationScreen';
import CoordinatesInterestScreen from './CoordinatesInterestScreen';
import AddLocationScreen from './AddLocationScreen';
import ReadingListScreen from './ReadingListScreen';

import { Provider } from 'unstated';

const stackRoutes = {
    NearMePedia: NearMePediaScreen,
    EnterLocation: EnterLocationScreen,
    ResultLocation: ResultLocationScreen,
    CoordinatesInterest: CoordinatesInterestScreen,
    AddLocation: AddLocationScreen,
    ReadingList: ReadingListScreen,
};
const stackOptions = {
    initialRouteName: 'NearMePedia'
};

const StackNavigator = createStackNavigator(stackRoutes, stackOptions)

const AppContainer = createAppContainer(StackNavigator);

export default class App extends React.Component {

    render() {

        return (
            <Provider>
                <AppContainer
                />
            </Provider>
        );
    }
}
