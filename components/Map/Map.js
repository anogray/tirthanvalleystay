import React from 'react'
import { GoogleMap, useJsApiLoader, Marker  } from '@react-google-maps/api';

const containerStyle = {
//   width: '300px',
  height: '400px'
};

const center = {
    lat: 31.6411121240562,
    lng: 77.40573691534645
};//31.64079029010021, 77.40372170737561

const positionMarker = {
  lat: 31.6411121240562,
  lng: 77.40573691534645
};//31.6411121240562, 77.40573691534645

function MyComponent() {
//   const { isLoaded } = useJsApiLoader({
//     id: 'google-map-script',
//     googleMapsApiKey: "AIzaSyCnxRzHHODPgsJdhuwAML4klgfyq4-aC5s"
//   })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    bounds.extend(center)
    console.log("seeBounds",bounds);
    // const bounds = new window.google.maps.LatLngBounds(center.lat, center.lng);31.64107125237849, 77.40573520663028
    // map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  const onLoadMe = (marker) => {
    console.log('marker: ', marker)
  }
  console.log("gettinMap",{isLoaded},map);

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={18}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        
        <Marker
        onLoad={onLoadMe}
        position={positionMarker}
        />
        
      </GoogleMap>
  ) : <>Loading...</>
}

export default React.memo(MyComponent)