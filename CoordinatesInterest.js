import React from 'react';
import {Text, View, Button} from 'react-native';
import {Subscribe} from "unstated";
import LocationContainer from "./LocationContainer";
import Coordinates from "./Coordinates";

export default class CoordinatesInterest extends React.Component {
    constructor(props) {
        super(props)

    }

    addKeys = (val, index) => (
        {...val, key: index}
    );



    render() {
        const displayCoordinateList = this.props.coordinateList.map(location => {
            //console.log(location);
            return (
                <View>
                    <Coordinates
                        location={location}
                        onSelect={this.props.onSelect}
                    />

                </View>

            )
        });
        const coordinateList = displayCoordinateList.map(this.addKeys);

        return (
            <View>
                <Text>Your Coordinates are: </Text>

                <View>
                    {coordinateList}
                </View>
                <View>

                    <Button
                        title={'Add a Location to your List'}
                        onPress={this.props.onAdding}
                    />
                    <Subscribe to={[LocationContainer]}>
                        {locationcontainer => (
                            <Button
                                title={'Use Current Location'}
                                onPress={()=>{
                                    locationcontainer.getCurrentLocation();
                                    const coords={
                                        lat: locationcontainer.state.lat,
                                        lng: locationcontainer.state.lng
                                    };
                                    this.props.onCurrentLocation(coords)
                                }}
                            />
                        )}
                    </Subscribe>
                    <Button
                        title={'Delete All'}
                        onPress={this.props.onDelete}/>

                </View>
            </View>

        )
    }
}