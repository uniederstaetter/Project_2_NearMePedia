import React from 'react';

import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import NearMePediaScreen from './screens/NearMePediaScreen';
import EnterLocationScreen from "./screens/EnterLocationScreen";
import ResultLocationScreen from './screens/ResultLocationScreen';
import CoordinatesInterestScreen from './screens/CoordinatesInterestScreen';
import AddLocationScreen from './screens/AddLocationScreen';
import ReadingListScreen from './screens/ReadingListScreen';

import {Provider} from 'unstated';

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

//main app that is only used for navigation and as a provider for the container components.
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
