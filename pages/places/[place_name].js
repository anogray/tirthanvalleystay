// import Carousel from "react-bootstrap/Carousel"
import NavBar from "../../components/NavBar";
import PropertyPlace from "../../components/Places/PropertyPlace";
import MapLocation from "../../components/Map/Map";
import locations from "../../components/Map/locations.json";
import { Button, Card } from "react-bootstrap";
import { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


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




    return (
      <div className="main-page">
       <NavBar/>
      <div className="place-body">

      <h3>Usha Tirthan Lodge</h3>
      {/* <script>
     { 
       function initMap() {
        var options = {
          zoom: 15,
          center: { lat: 33.933241, lng: -84.340288 },
        };
        var map = new google.maps.Map(document.getElementById('map'), options);
        var marker = new google.maps.Marker({
          position: { lat: 33.933241, lng: -84.340288 },
          map: map,
        });
      }
      }
    </script> */}
    {/* <callMapComponent/>
    <script defer
          src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBWdq5YF-UdqtFLX0E4NxRcBDep21q95Mocallback=initMap">
        </script> */}
      {/* <script
      src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBWdq5YF-UdqtFLX0E4NxRcBDep21q95Mo&callback=initMap&libraries=&v=weekly&channel=2"
      async
    ></script> */}


        {/* <Carousel>
              {imgArr.map((ele,idx)=>{
                      console.log("thisisIdx",ele.idx)
                        return <Carousel.Item interval={intervalCarousel}>
                          <img
                            className="d-block w-100"
                              src={ele.src}
                            alt="Image One"
                          />
                        </Carousel.Item>   

              }
              )
            }
        </Carousel> */}

        <Carousel selectedItem={6} autoPlay interval={intervalCarousel}>
        {imgArr.map((ele,idx)=> <div>
                    <img src={ele.src} width="100px"/>
                    {/* <p className="legend">Legend 1</p> */}
                  </div>
                  )

                  
        }
            </Carousel>



      {/* <div className="img-list-scroll">
              
              {
                imgArr.map((ele)=><img className={`thumnbnail active-thumbnail`} src={ele.src} width="100px"/>)
              }
        </div> */}

      <PropertyPlace/>
      {/* <div id="map"></div> */}
      {/* <Button onClick={()=>initMap()}>Show Location</Button> */}
      {/* {open ? <MapLocation locations={locations}/> : ""} */}
      <div className="map-place-location">
      {/* <MapLocation/> */}
      <div className="location-img-container">
      <a href="https://www.google.com/maps/place/Usha+Guest+house-+Tirthan+valley/@31.6409423,77.4058249,18.7z/data=!4m18!1m9!3m8!1s0x0:0xa8b6b5e5bccbbfc7!2sUsha+Guest+house-+Tirthan+valley!5m2!4m1!1i2!8m2!3d31.6410298!4d77.4057369!3m7!1s0x3905b220e8d9778f:0xa8b6b5e5bccbbfc7!5m2!4m1!1i2!8m2!3d31.6410298!4d77.4057369?hl=en-US" target="_blank"><img className="location-img" src="/images/places/ushaLodge.PNG"/></a>
      </div>
      </div>
      </div>
    </div>
    )
  }