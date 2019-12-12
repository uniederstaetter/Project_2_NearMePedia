import React from 'react';
import {StyleSheet, Text, View, ScrollView, Button, TextInput, TouchableOpacity} from 'react-native';
import {Subscribe} from "unstated";
import LocationContainer from "../container/LocationContainer";

//AddLocation Component is used to add a location of users interest to the list of saved locations.
//It subscribes to the LocationContainer, so that on adding the list of saved coordinates is updated.
export default class AddLocation extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

            address: null
        }
    }

    //on user input the state variable address is set to the input.
    //which is then used to store in the coordinate-list.
    handleLocationChange = location => {
        this.setState({address: location})
    };


    render() {

        return (
            <View>
                <TextInput

                    style={styles.input}
                    value={this.state.address}
                    onChangeText={this.handleLocationChange}
                />


                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        this.props.onSubmit(this.state.address)
                        this.props.onAdd()
                    }
                    }
                >
                    <Text style={styles.textstyle}>Add Location to your List.</Text>
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