import React from 'react';
import {StyleSheet, Text, View, ScrollView, Button} from 'react-native';
import {Subscribe} from "unstated";
import LocationContainer from "./LocationContainer";

export default class NearMePedia extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View>
                <Text style={mainscreen.title}>NearMePedia</Text>
                <Button
                    title={'Get started'}
                    onPress={this.props.onStart}
                />
                <Button
                    title={'Coordinates of Interest'}
                    onPress={this.props.onInterest}
                />
                <Subscribe to={[LocationContainer]}>
                    {locationcontainer =>(
                        <Button
                            title={'Reading list'}
                            onPress={()=>{
                                this.props.onReading()
                                locationcontainer.getCurrentLocation();
                            }}
                        />
                    )}
                </Subscribe>



            </View>
        )
    }
}

const mainscreen =StyleSheet.create({
    title: {
        fontSize:35,
        fontWeight:'bold',
        color: 'black',
        marginBottom:10,

    },
    subtitle: {
        fontSize: 18,
        marginBottom:30,

    },
    subsubtitle: {
        fontSize:20,
        fontWeight:'bold',
        color: 'white',
        marginBottom:15,

    },
});
