// import Carousel from "react-bootstrap/Carousel"
import NavBar from "../../components/NavBar";
import { Button, Card } from "react-bootstrap";
import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from 'next/router'
import { Link } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import PropertyTypes from "../../components/PropertyTypes/PropertyTypes";


export default function PropertiesType() {

    const router = useRouter();
    const propertyTypeProp = router.query;
    const [propertyData,setPropertyData] = useState(null);

    useEffect(()=>{
        try{
            if(propertyTypeProp.propertyType){
                const getProperties = async()=>{
    
                    // const response = await axios.get(`http://localhost:4000/property/category?category=${propertyTypeProp.propertyType}`);
                    const response = await axios.get(`https://tirthanvalleybackend.herokuapp.com/property/category?category=${propertyTypeProp.propertyType}`);
                    console.log("responseTypeProperty",response.data);
                    setPropertyData(response.data.dataMessage);
                    // const response = await axios.get(`https://tirthanvalleybackend.herokuapp.com/property?propertyName=${propertyType.propertyType}`);
    
                }
                getProperties();

            }


        }catch(err){
            console.log("errTypeProperty",err.message);
        }
    },[propertyTypeProp])

    return (

        <div className="main-page">
       <NavBar/>
       {
        propertyData==null ? (<div className="loader">
          <Loader/>
          </div> ) : <></>
       }
      {  propertyData!=null && <PropertyTypes properties={propertyData} propertyType={propertyTypeProp.propertyType}/>}
      
       </div>
    )
}
