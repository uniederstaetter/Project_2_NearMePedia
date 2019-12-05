import React from 'react';
import {PersistContainer} from 'unstated-persist'
import {AsyncStorage} from 'react-native';
import {getDistance} from 'geolib';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import {Alert} from 'react-native';

export default class LocationContainer extends PersistContainer {
    state = {
        coordinateList: [],
        errorMessage: null,
        lat: null,
        lng: null
    }

    getCurrentLocation = async () => {

        let {status} = await Permissions.askAsync(Permissions.LOCATION);

        if (status !== "granted") {
            Alert.alert('You did not grant the permission to use your location.');
            this.setState({errorMessage: 'Permission was denied'});
        }
        else{
            let location = await Location.getCurrentPositionAsync({});

            this.setState({lat: location.coords.latitude});
            this.setState({lng: location.coords.longitude});
        }



    };


    addCoordinate = async (location) => {
        const theCoordinates = await this.coordinates(location);

        const newCoordinate =
            {
                name: location,
                coords: theCoordinates
            }
        ;
        const newList = [...this.state.coordinateList, newCoordinate];

        this.setState({coordinateList: newList});
        console.log(this.state.coordinateList);

    };
    coordinates = async (resultAddress) => {
        const response = await fetch('https://maps.googleapis.com/maps/api/geocode/json?address=' + resultAddress + '&key=xx ');
        const theCoordinates = await response.json();
        const convertedCoordinates = theCoordinates.results.map(apiLocation => {
            return {
                lat: apiLocation.geometry.location.lat,
                lng: apiLocation.geometry.location.lng
            }
        });
        return convertedCoordinates
    };

    toCoordinates = async (resultAddress) => {
        //console.log(resultAddress);
        let lat = null;
        let lng = null;

        if (typeof resultAddress === "string") {
            const theCoord = await this.coordinates(resultAddress);
            console.log('address');

            lat = theCoord[0].lat;
            lng = theCoord[0].lng;
        } else {
            console.log('coordinates');
            lat = resultAddress.lat;
            lng = resultAddress.lng;
        }

        return this.nearbyArticles(lat, lng);

    };

    //TODO: need to have a function that takes as a parameter the coordinates of the current location
    //TODO: if statement to check if resultaddress are coordinates or an address?
    nearbyArticles = async (lat, lng) => {
        let url = "https://en.wikipedia.org/w/api.php";


        const params = {
            action: "query",
            list: "geosearch",
            gscoord: "" + lat + "|" + lng + "",
            gsradius: "10000",
            gslimit: "10",
            format: "json"
        };

        url = url + "?origin=*";

        Object.keys(params).map(function (key) {
            url += "&" + key + "=" + params[key];
        });
        //console.log(url);
        const response = await fetch(url);
        const thePages = await response.json();
        //console.log(thePages);
        const convertedPages = thePages.query.geosearch.map(page => {
            //console.log(page);
            return {
                title: page.title,
                distance: page.dist,
                lat: page.lat,
                lng: page.lon,
            }
        });
        //console.log(convertedPages);
        return convertedPages;
    };

    persist = {
        key: 'counter',
        version: 1,
        storage: AsyncStorage,
    };

    //gets the lat and the long of the current article and uses the distance to the state lat and longs taken from current loc
    theCurrentDistance = (lat, long) => {
        const theDist = getDistance({latitude: lat, longitude: long},
            {latitude: this.state.lat, longitude: this.state.lng});


        return theDist;


    };


    clearAllData() {
        AsyncStorage.getAllKeys()
            .then(keys => AsyncStorage.multiRemove(keys))
            .then(() => alert('success'));
        this.setState({coordinateList: []});
    }

}