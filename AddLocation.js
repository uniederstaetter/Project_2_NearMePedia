import React from 'react';
import {StyleSheet, Text, View, ScrollView, Button, TextInput} from 'react-native';
 //API KEY: AIzaSyDc4esddP2WbdHp7zoV-hMS3UdCJXJzpZw
export default class AddLocation extends React.Component {
    constructor(props){
        super(props)

    }
    render() {

        return (
            <View>
                <Text> Enter a Location </Text>
                <TextInput

                    style={styles.input}
                    value={''}
                />
                <Button
                    title={'Add'}
                    onPress={this.props.onAdd}
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