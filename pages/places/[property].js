// import Carousel from "react-bootstrap/Carousel"
import NavBar from "../../components/NavBar";
import Head from "next/head";
import PropertyPlace from "../../components/Places/PropertyPlace";
import MapLocation from "../../components/Map/Map";
import locations from "../../components/Map/locations.json";
import { Button, Card } from "react-bootstrap";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from 'next/router'
import { Link } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import { domainType } from "../../components/util";
import Footer from "../../components/Footer/Footer";
import Weather from "../../components/Footer/Weather";

export default function PlaceVisited({propertyDetails}) {

   console.log("fromserverside propertyDetails",propertyDetails);
    const property = propertyDetails.dataMessage;
    const intervalCarousel = 3500;
    const [open,showMap] = useState(false);
    const [activeThumnail, setActiveThumbnail] = useState(false);

    const router = useRouter();
    const propProperty = router.query;
    // const [property, setProperty] = useState(null);
    

   
  //   useEffect(() => {
  //     try{
  //         if(propProperty.property){
  //             console.log("gotParams",propProperty.property);

  //             const getPropertyDetails = async() =>{
  //             const response = await axios.get(domainType(propProperty.property));
  //             // const response = await axios.get(`http://localhost:4000/property?propertyName=${propProperty.property}`);
  //             // const response = await axios.get(`https://tirthanvalleybackend.herokuapp.com/property?propertyName=${propProperty.property}`);
  //             if(response.data.errorMessage){
  //              router.push("/");
  //             }
  //             console.log("gotResponse",response.data.dataMessage);
  //             setProperty(response.data.dataMessage)
  //             }
  //             getPropertyDetails();

  //         }

  //     }catch(err){
  //         console.log("errorPage directProperty",err.response);
  //         router.push("/");
  //     }
      
  //     return () => {
          
  //     };
  // }, [propProperty?.property])
  
  console.log("seeThe",property);


    return (
      <div className="main-page">
      <Head>
        <title>{property?.fullName || ""}</title>
      </Head>
       <NavBar/>
       {
         property==null ? (<div className="loader">
          <Loader/>
          </div> ) : <></>
       }

     { property!=null && 
       <div className="place-body">

      <h3>{property.fullName}</h3>
        <Carousel autoPlay interval={intervalCarousel}>
        {
          property.imgs_url.map((ele,idx)=> <div>
                    <img src={ele} width="100px"/>
                    {/* <p className="legend">Legend 1</p> */}
                  </div>
                  ) 
        }
            </Carousel>

      <PropertyPlace details={property}/>
      <div className="map-place-location">
      {/* <MapLocation/> */}
      <div className="location-img-container">
      <h3>Map Location</h3>
      <a href={property.mapLocation} target="_blank"><img src={property.mapImgUrl}/></a>
      
      </div>
      </div>
      </div>
      }
      <Weather/>
      {/* <Footer/> */}
    </div>
    )
  }

  export async function getServerSideProps({ params }) {
    console.log("checkParams getServerSideProps", params);
    // const affiliationId = params.affiliationId.replace(/\-/g, '+')
    // const characters = await axios.get(`https://last-airbender-api.herokuapp.com/api/v1/characters?affiliation=${affiliationId}`).then(res => res.json());
    // const propertyDetails = await axios.get(domainType(params.property));
    const propertyDetails = await axios.get(`https://tirthanvalleybackend.herokuapp.com/property?propertyName=${params.property}`);
     //console.log(propertyDetails.data);
    return {
      props: {
        propertyDetails:propertyDetails.data
      }
    }
  }  