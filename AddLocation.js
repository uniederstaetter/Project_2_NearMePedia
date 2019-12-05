import React from 'react';
import {StyleSheet, Text, View, ScrollView, Button, TextInput} from 'react-native';
import {Subscribe} from "unstated";
import LocationContainer from "./LocationContainer";


export default class AddLocation extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

            address: null
        }
    }

    handleLocationChange = location => {
        this.setState({address: location})
    };


    render() {

        return (
            <View>
                <Text> Enter a Location </Text>
                <TextInput

                    style={styles.input}
                    value={this.state.address}
                    onChangeText={this.handleLocationChange}
                />
                <Subscribe to={[LocationContainer]}>
                    {locationcontainer => (
                        <Button
                            title={'Add'}
                            onPress={() => {
                                locationcontainer.addCoordinate(this.state.address)
                                this.props.onAdd
                            }
                            }
                        />

                    )}
                </Subscribe>


            </View>
        )


    }
}
const styles = StyleSheet.create({
    input: {
        borderColor: 'black',
        borderWidth: 1,
        padding: 10,
        margin: 20
    }
});