import GoogleMapReact from "google-map-react";
// import pin from "../../imgs/pin.png";
import { Link } from "react-router-dom";

const markerStyle = {
  position: "absolute",
  top: "100%",
  left: "50%",
  transform: "translate(-50%, -100%)"
};

const MapLocation = ()=>{

  const defaultProps = {
    center: {
      lat: 60.192059,
      lng: 24.945831
    },
    zoom: 11
  };

    return (
      // Important! Always set the container height explicitly
      <div style={{ height: "100vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{
            key: "AIzaSyA16d9FJFh__vK04jU1P64vnEpPc3jenec"
          }}
        //   defaultCenter={this.props.center}
        //   defaultZoom={this.props.zoom}
        >
          {/* {this.props.locations.map(item => {
            if (item.address.length !== 0) {
              return item.address.map(i => {
                return (
                  <Link to={"/" + item.name} key={i.id} lat={i.lat} lng={i.lng}>
                    <img style={markerStyle} src={"me"} alt="pin" />
                  </Link>
                );
              });
            }
          })} */}
        </GoogleMapReact>
      </div>
    );
  
}

export default MapLocation;
