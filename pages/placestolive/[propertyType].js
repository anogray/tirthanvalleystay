// import Carousel from "react-bootstrap/Carousel"
import Head from "next/head";
import NavBar from "../../components/NavBar";
import { Button, Card } from "react-bootstrap";
import axios from "axios";
import { useEffect, useState } from "react";
import { useRouter } from 'next/router'
import { Link } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import PropertyTypes from "../../components/PropertyTypes/PropertyTypes";


export default function PropertiesType({propertyData : receivedData}) {

    const router = useRouter();
    const propertyTypeProp = router.query;
    // const [propertyData,setPropertyData] = useState(null);
    console.log({receivedData});
    const [propertyData,setPropertyData] = useState(receivedData.dataMessage);

    // useEffect(()=>{
    //     try{
    //         if(propertyTypeProp.propertyType){
    //             const getProperties = async()=>{
    
    //                 // const response = await axios.get(`http://localhost:4000/property/category?category=${propertyTypeProp.propertyType}`);
    //                 const response = await axios.get(`https://tirthanvalleybackend.herokuapp.com/property/category?category=${propertyTypeProp.propertyType}`);
    //                 console.log("responseTypeProperty",response.data);
    //                 setPropertyData(response.data.dataMessage);
    //                 // const response = await axios.get(`https://tirthanvalleybackend.herokuapp.com/property?propertyName=${propertyType.propertyType}`);
    
    //             }
    //             getProperties();

    //         }


    //     }catch(err){
    //         console.log("errTypeProperty",err.message);
    //     }
    // },[propertyTypeProp])

    return (

        <div className="main-page">
        <Head>
        <title>{propertyTypeProp.propertyType.toUpperCase()+" TirthanValley Properties"|| ""}</title>
      </Head>
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


export async function getServerSideProps({ params }) {
    console.log("checkParams getServerSideProps", params);
    const propertyTypeProp = params;
    // const affiliationId = params.affiliationId.replace(/\-/g, '+')
    // const characters = await axios.get(`https://last-airbender-api.herokuapp.com/api/v1/characters?affiliation=${affiliationId}`).then(res => res.json());
    // const propertyDetails = await axios.get(domainType(params.property));
    const propertyData = await axios.get(`https://tirthanvalleybackend.herokuapp.com/property/category?category=${propertyTypeProp.propertyType}`);
    //console.log(propertyDetails.data);
    return {
      props: {
        propertyData:propertyData.data
      }
    }
  }

