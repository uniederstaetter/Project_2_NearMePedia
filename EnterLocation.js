import React from 'react';
import {StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';

//EnterLocation component gives the user the possibility to enter a location of his choice which should be used to calculate
//articles that are near that location. The component consists of one state which is an address, which is the input of the user
//a input field and a button for letting the application search for results. That means, when the user clicks on the display button,
//it uses the callback function, that was passed as props and sets the parameter (the address) to the value the user has given.
export default class EnterLocation extends React.Component {
    constructor(props) {
        super(props)
        this.state = {address: ''}
    }

    //on user input the state variable address is set to the input of the user.
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
                        this.setState({address: ''})
                    }}
                >
                    <Text style={styles.textstyle}>Display Articles</Text>
                </TouchableOpacity>

            </View>
        )


    }
}
////////////////////////***************STYLING*********************///////////////////////////////////
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
        marginBottom: 10,
        padding: 2,
        margin: 70,
    },
    textstyle: {
        fontSize: 18,
    },
});