import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

export default class CoordinatesInterest extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View>
                <Text>Your Coordinates are: </Text>

                <View>
                    <Button
                        title={'Add a Location to your List'}
                        onPress={this.props.onAdding}
                    />
                    <Button
                        title={'Use Current Location'}
                    />
                </View>
            </View>

        )
    }
}