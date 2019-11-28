import React from 'react';
import {StyleSheet, Text, View, ScrollView, Button} from 'react-native';

export default class NearMePedia extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View>
                <Text>NearMePedia</Text>
                <Button
                    title={'Get started'}
                    onPress={this.props.onStart}
                />
                <Button
                    title={'Coordinates of Interest'}
                    onPress={this.props.onInterest}
                />
                <Button
                    title={'Reading list'}
                    onPress={this.props.onReading}
                />


            </View>
        )
    }
}