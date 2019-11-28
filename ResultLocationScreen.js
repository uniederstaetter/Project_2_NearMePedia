import React from 'react';
import {StyleSheet, Text, View, ScrollView, Button} from 'react-native';
import ResultLocation from './ResultLocation';

const ResultLocationScreen = props => {
    const resultAddress = props.navigation.getParam('location');
    //console.log(resultAddress);

    const coordinates = async () => {
        const response = await fetch('https://maps.googleapis.com/maps/api/geocode/json?address=' + resultAddress + '&key=AIzaSyDc4esddP2WbdHp7zoV-hMS3UdCJXJzpZw');
        const theCoordinates = await response.json();
        const convertedCoordinates = theCoordinates.results.map(apiLocation => {
            return {
                lat: apiLocation.geometry.location.lat,
                lng: apiLocation.geometry.location.lng
            }
        });
        return convertedCoordinates
    };

    const nearby = async () => {
        let url = "https://en.wikipedia.org/w/api.php";
        const theCoord = await coordinates();

       const lat= theCoord[0].lat;
       const lng= theCoord[0].lng;


        const params = {
            action: "query",
            list: "geosearch",
            gscoord: ""+lat +"|"+ lng+ "",
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
            }
        });
        //console.log(convertedPages);
        return convertedPages;
    };



    return (
        <View>
            <ResultLocation
                location={nearby()}
            />
        </View>
    );
};
export default ResultLocationScreen
