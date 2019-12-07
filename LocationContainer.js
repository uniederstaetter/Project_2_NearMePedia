import React from 'react';
import {PersistContainer} from 'unstated-persist'
import {AsyncStorage} from 'react-native';
import {getDistance} from 'geolib';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import {Alert} from 'react-native';

//persistent container component that stores all relevant information regarding locations.
//most important we have the persistent coordinateList which represents all coordinates(locations) the user has stored.
//in addition we have the errormessage state variable, which is used to check if the user has granted the access to his current location
//and regarding the current location we have also lat and lng state variables which represent the lat and lng coordinate the user have, i.e., his
//current location.
export default class LocationContainer extends PersistContainer {
    state = {
        coordinateList: [],
        errorMessage: null,
        lat: null,
        lng: null
    };

    //this function is called when the user first access the app. It asks the user if the application is allowed
    //to use his current location. If he does not grant the access, he will be prompted with a message that some
    //services will be limited due to the fact that we cannot use his current location and we set the errormessage.
    //if he does grant it, we set the coordinates and set the errormessage to null.
    getCurrentLocation = async () => {

        let {status} = await Permissions.askAsync(Permissions.LOCATION);

        if (status !== "granted") {
            Alert.alert('You did not grant the permission to use your location. Some services will be limited.');
            this.setState({errorMessage: 'Permission was denied'});
            this.setState({lat: null});
            this.setState({lng: null});
        } else {
            let location = await Location.getCurrentPositionAsync({});

            this.setState({lat: location.coords.latitude});
            this.setState({lng: location.coords.longitude});
            this.setState({errorMessage: null});

        }
    };

    //this function is a callback function in the CoordinatesInterest component. It is called when
    //the user clicks the add button. If the user did not enter a location (empty string) he is prompted
    //with an errormessage, otherwise the new coordinate, i.e., the location he has entered will be added
    //to the persistent list of coordinates.
    addCoordinate = async (location) => {
        if (location === null) {
            Alert.alert('You did not enter any Location. Please try again.!');
        } else {
            const theCoordinates = await this.coordinates(location);

            const newCoordinate =
                {
                    name: location,
                    coords: theCoordinates
                }
            ;
            const newList = [...this.state.coordinateList, newCoordinate];

            this.setState({coordinateList: newList});
        }
    };

    //this function is used to calculate the coordinates of the user`s entered location, i.e., is uses reverse
    //geocoding. For that the Google Maps API has been used. Therefore replace "API-KEY"  in key= with the key that was sent to
    //you via mail. It gets back the coordinates that correspond to that location (approximated).
    coordinates = async (resultAddress) => {
        const response = await fetch('https://maps.googleapis.com/maps/api/geocode/json?address=' + resultAddress + '&key=API-KEY');
        const theCoordinates = await response.json();
        const convertedCoordinates = theCoordinates.results.map(apiLocation => {
            return {
                lat: apiLocation.geometry.location.lat,
                lng: apiLocation.geometry.location.lng
            }
        });
        return convertedCoordinates
    };

    //this function is called by all components to check whether the user has used coordinates to display the articles
    //or coordinates, i.e., the current location of his phone. If he has used an address it will call the coordinates function, that gets
    //the coordinates of the Google API, otherwise it will simply use the coordinates of the users current location.
    //Most important this function calls the nearbyArticles function by using the calculated coordinates for this query.
    toCoordinates = async (resultAddress) => {
        let lat = null;
        let lng = null;

        if (typeof resultAddress === "string") {
            const theCoord = await this.coordinates(resultAddress);

            lat = theCoord[0].lat;
            lng = theCoord[0].lng;
        } else {
            lat = resultAddress.lat;
            lng = resultAddress.lng;
        }

        return this.nearbyArticles(lat, lng);

    };

    //this function is called by the toCoordinates function and used to retrieve articles that are near to the passed lat and lng parameters.
    nearbyArticles = async (lat, lng) => {
        let url = "https://en.wikipedia.org/w/api.php";

        //parameters needed to be specified, notice that the number of returned articles in limited to 100.(see gslimit)
        const params = {
            action: "query",
            list: "geosearch",
            gscoord: "" + lat + "|" + lng + "",
            gsradius: "10000",
            gslimit: "100",
            format: "json"
        };

        url = url + "?origin=*";

        Object.keys(params).map(function (key) {
            url += "&" + key + "=" + params[key];
        });

        //fetches the article from the Wikipedia API.
        const response = await fetch(url);

        //converts the response in JSON format.
        const thePages = await response.json();

        //for each element in the returned JSON response we filter out the title, the distance to the coordinates entered by the user
        //the lat and the lng coordinate of the location the article talkes about. (used later on for calculation of the distance to current
        //location).
        const convertedPages = thePages.query.geosearch.map(page => {
            return {
                title: page.title,
                distance: page.dist,
                lat: page.lat,
                lng: page.lon,
            }
        });
        return convertedPages;
    };

    //needed function to have access to the AsyncStorage provided by React native.
    persist = {
        key: 'counter',
        version: 1,
        storage: AsyncStorage,
    };

    //gets the lat and the long of the current article and uses the lat and lng coordinates of the current location (state variables)
    //to calculate the distance.
    theCurrentDistance = (lat, long) => {
        const theDist = getDistance({latitude: lat, longitude: long},
            {latitude: this.state.lat, longitude: this.state.lng});

        return theDist;
    };

    //function used to clear the coordinatesList, mainly for debugging purpose but implemented also for the user.
    clearAllData() {
        AsyncStorage.getAllKeys()
            .then(keys => AsyncStorage.multiRemove(keys))
            .then(() => alert('success'));
        this.setState({coordinateList: []});
    }

}