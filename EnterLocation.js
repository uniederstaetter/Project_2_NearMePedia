import React from 'react';
import {StyleSheet, Text, View, Button, TextInput} from 'react-native';

export default class EnterLocation extends React.Component {
    constructor(props){
        super(props)
        this.state={address: ''}
    }

    handleAddressChange = address=>{
        this.setState({address: address})
    };
    render() {

        return (
            <View>
                <Text> Enter a Location </Text>
                <TextInput
                    style={styles.input}
                    value={this.state.address}
                    onChangeText={this.handleAddressChange}
                />
                <Button
                    title={'Display Articles'}
                    onPress={()=> this.props.onDisplay(this.state.address)}
                />

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