import { Button, Card } from "react-bootstrap";
import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from 'next/router'


export default function PropertyPlace({details}) {

    // const router = useRouter();
    // const propProperty = router.query;
    // const [property, setProperty] = useState(null);

    // const objEntities = {
    //     "Bathroom":["Toilet paper","Towels", "Bath or shower", "Private bathroom", "Toilet", "Shower"],
    //     "Kitchen": ["Electric kettle"],
    //     "Bedroom":["Linen","Wardrobe or closet"],
    //     "Entertainment and family services": ["Children television networks"],
    //     "Outdoors" : ["Outdoor furniture", "Outdoor dining area", "Outdoor furniture", "Garden", "BBQ facilities"],
    //     "Activities" : ["Hiking"],
    //     "Food & Drink" : ["Tea/Coffee maker"],
    //     "Internet" : ["Access"]
    // }

    // useEffect(() => {


    //     try{
    //         if(propProperty.property){
    //             console.log("gotParams",propProperty.property);

    //             const getPropertyDetails = async() =>{
    //             const response = await axios.get(`http://localhost:4000/property?propertyName=${propProperty.property}`);
    //             console.log("gotResponse",response.data.dataMessage);
    //             setProperty(response.data.dataMessage)
    //             }
    //             getPropertyDetails();

    //         }

    //     }catch(err){
    //         console.log("error",err);
    //     }
        
    //     return () => {
            
    //     };
    // }, [propProperty?.property])

    // console.log("check",property);

  return (
    <>
   { 
       <div className="facility-body">
      
    <h4>Facilities</h4>
    {/* <div className="hotel-facilities" id="hp_facilities_box" data-et-view=""> */}
                
                <div className="row container hotels-section-list">

                    {Object.keys(details.facilities).map((key)=> 
                        <Card style={{ width: "200px" }}>
                            <Card.Body>
                                    <Card.Subtitle className="mb-2 text-muted facility-text">{key}</Card.Subtitle>
                                    <Card.Title className="facility-text facility-list">{
                                        details.facilities[key].map((ele,idx)=>
                                        <ul className="list-details" key={idx}>
                                        <li className="facility-point">{ele}</li>
                                        </ul>)
                                        
                                        }
                                    </Card.Title>
                                    {/* <Card.Text>
                                    Tirthan Valley </Card.Text> */}
                            </Card.Body>
                        </Card>
                    )}
                    
                </div>
       {/* </div> */}
        
        </div>
        }
    </>
  );
}
