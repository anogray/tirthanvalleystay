import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';// import pin from "../../imgs/pin.png";
import { Link } from "react-router-dom";


useEffect(() => {
  const loader = new Loader({
    apiKey: 'AIzaSyBWdq5YF-UdqtFLX0E4NxRcBDep21q95Mo',
    version: 'weekly',
  });
  let map;
  loader.load().then(() => {
    const google = window.google; // ADDED
    map = new google.maps.Map(googlemap.current, {
      center: {lat: -34.397, lng: 150.644},
      zoom: 8,
    });
  });
});

export default MapLocation;
