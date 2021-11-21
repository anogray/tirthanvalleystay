// import Carousel from "react-bootstrap/Carousel"
import NavBar from "../../components/NavBar";
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

export default function PlaceVisited() {

    const intervalCarousel = 3500;
    const [open,showMap] = useState(false);
    const [activeThumnail, setActiveThumbnail] = useState(false);

    const imgArr=[{idx:0, src:"https://tirthanvalleydev.s3.ap-south-1.amazonaws.com/senior/usha/IMG-20201230-WA0014.jpg"},
    {idx:0, src:"https://tirthanvalleydev.s3.ap-south-1.amazonaws.com/senior/usha/IMG-20201230-WA0014.jpg"},
    {idx:1, src:"https://tirthanvalleydev.s3.ap-south-1.amazonaws.com/senior/usha/IMG-20201230-WA0014.jpg"},
    {idx:2, src:"https://tirthanvalleydev.s3.ap-south-1.amazonaws.com/senior/usha/IMG-20201230-WA0014.jpg"},
    {idx:3, src:"https://tirthanvalleydev.s3.ap-south-1.amazonaws.com/senior/usha/IMG-20201230-WA0014.jpg"},
    {idx:4, src:"https://tirthanvalleydev.s3.ap-south-1.amazonaws.com/senior/usha/IMG-20201230-WA0014.jpg"},
    {idx:5, src:"https://tirthanvalleydev.s3.ap-south-1.amazonaws.com/senior/usha/IMG-20201230-WA0014.jpg"},
    {idx:6, src:"https://tirthanvalleydev.s3.ap-south-1.amazonaws.com/senior/usha/IMG-20201230-WA0014.jpg"},
    {idx:7, src:"https://tirthanvalleydev.s3.ap-south-1.amazonaws.com/senior/usha/IMG-20201230-WA0014.jpg"},
    {idx:8, src:"https://tirthanvalleydev.s3.ap-south-1.amazonaws.com/senior/usha/IMG-20201230-WA0014.jpg"},
    {idx:9, src:"https://tirthanvalleydev.s3.ap-south-1.amazonaws.com/senior/usha/IMG-20201230-WA0014.jpg"},
        ]

    const router = useRouter();
    const propProperty = router.query;
    const [property, setProperty] = useState(null);

    useEffect(() => {
      try{
          if(propProperty.property){
              console.log("gotParams",propProperty.property);

              const getPropertyDetails = async() =>{
              const response = await axios.get(`http://localhost:4000/property?propertyName=${propProperty.property}`);
              console.log("yesWeeeeeeeeeeee",response.data.dataMessage);
              if(response.data.errorMessage){
               router.push("/");
              }
              console.log("gotResponse",response.data.dataMessage);
              setProperty(response.data.dataMessage)
              }
              getPropertyDetails();

          }

      }catch(err){
          console.log("error",err.response);
          router.push("/");
      }
      
      return () => {
          
      };
  }, [propProperty?.property])
  
  console.log("seeThe",property);


    return (
      <div className="main-page">
       <NavBar/>
       {
         property==null  ? (<div className="loader">
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
    </div>
    )
  }