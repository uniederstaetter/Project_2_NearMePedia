import React from 'react';
import {StyleSheet, Text, View, ScrollView, Button} from 'react-native';

export default class NearMePedia extends React.Component {
    render() {
        return (
            <View>
                <Text>NearMePedia</Text>
                <Button
                    title={'Get started'}
                />
                <Button
                    title={'Saved locations'}/>
                <Button
                    title={'Reading list'}/>

            </View>
        )
    }
}