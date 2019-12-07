# Project_2_NearMePedia
This project  was developed by Ulrike Niederstätter as the second project for the course Engineering of Mobile Systems. 

The application allows the user to enter locations or use the current location of the phone on which the application runs,
to display Wikipedia Articles that are near that given location.
Furthermore, the user is able to store articles that are of interest for him/her and additionally, store a list of coordinates, i.e., 
locations. This locations are stored as addresses and not as coordinates. Since this application works with the current location of the
device that runs the app, if the user does not grant access to his/her location, some services will not be offerd. This includes, the
distance to a location inside the reading list (It will not show any distance in that case) and the functionality of displaying articles near 
to the user`s current location, will not be available too. This means there will be no such service offered. 

Please note, that the application only works with a Google API-key. For that please go to LocationContainer.js in the function 
coordinates() and replace 'API-KEY with a valid API-key. (WAS SENT VIA SUBMISSION ON OLE TO PROFESSOR ROBBES)

Furthermore note, if the location-access was denied for testing purposes and after re-granting it, the application does not show any distance
in the readinglist, please restart the location. This is due to the fact, that the setState function is async and might take a few seconds
to execute it. 

The Application starts with a main Screen, on first use the user is asked for permission of accessing the location of his/her phone after granting/dening the user has the following 3 possibilites: 

    -1.) Get Started:
      On click of this button, the user is directed to a input screen. 
      Here he can enter a location in terms of an address. For example Bolzano. 
      Onclick of Display, the address the user has entered (if an address has been entered, otherwise the user will get a prompt with the 
      message that he is asked to go back and refill the form and no results will be shown.) is then sent to the Google Maps API, 
      which returns the coordinates for this address. 
      This coordinates are furthermore sent to the Wikipedia Geosearch API, which returns Wikipedia articles concering a location near to the
      address of the user. 
    -2) Coordintes Management:
      On click of this button, the user is directed to his/her list of saved locations. 
      Additionally, the user can add locations that he/she often wants to query. Furthermore, the user is able to display articles that 
      are concerned with locations near to his/her current location, by clicking on the Use your current location-button. Please note, 
      that this button is not available if the user has not granted access to his/her current location. 
      Last bot not least, the user is also able to delete the list that he/she has kept. 
      On click of an element of the list of locations, the articles near that locations are dispayed similar as in point 1.). 
    -3.) Reading List: 
      On click of this button, the user is directed to his/her list of articles that she/he has saved using either point 1.) or point
      2.). Here the user is able to click on the article title, similar as in point 1.) which opens the Wikipedia page of this article. 
      Additionally, it shows the distance of the location of the article to the user by using the current location of the device on 
      which the application runs. Note also here, that if the user has not granted to use his/her location, there will be no
      distance given. Also here, the user is given the possibility to delete the list of saved articles that he/she kept. 
  
