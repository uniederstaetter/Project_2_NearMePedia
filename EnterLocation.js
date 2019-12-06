import React from 'react';
import {StyleSheet, Text, View, Button, TextInput, TouchableOpacity} from 'react-native';

export default class EnterLocation extends React.Component {
    constructor(props) {
        super(props)
        this.state = {address: ''}
    }

    handleAddressChange = address => {
        this.setState({address: address})
    };

    render() {

        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.input}
                    value={this.state.address}
                    onChangeText={this.handleAddressChange}
                />
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        this.props.onDisplay(this.state.address)
                        this.setState({address:''})
                    }}
                >
                    <Text style={styles.textstyle}>Display Articles</Text>
                </TouchableOpacity>

            </View>
        )


    }
}
const styles = StyleSheet.create({
    container: {
        marginTop: 50,
    },
    input: {
        borderColor: 'black',
        borderWidth: 2,
        padding: 20,
        margin: 20
    },
    button: {
        height: 40,
        width: 220,
        backgroundColor: '#b3daf2',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        marginBottom:10,
        padding:2,
        margin: 70,
    },
    textstyle: {
        fontSize: 18,
    },
});