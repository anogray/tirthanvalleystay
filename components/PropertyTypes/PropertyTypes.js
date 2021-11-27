import { Button, Card } from "react-bootstrap";
import axios from "axios";
import { useEffect, useState } from "react";
import router, { useRouter } from 'next/router'
import { Link } from "react-router-dom";
import {typesOfProperties} from "../util";

export default function PropertyTypes(props){

    useEffect(()=>{

    },[])

    const handleProperty = (property)=>{
        router.push(`../places/${property.placeName}`)
    }

    const propertyData = props.properties;

    console.log("gotDataTypesProperties",propertyData, props.propertyType);
    return (

        <div className="property-type-container">
        
        <div className="type-head">
         <h3>{typesOfProperties[props.propertyType]}</h3>
        </div>

        <div className="properties-cards">
        {
        propertyData.map((property)=><Card key={property._id} className="propertyCard" onClick={()=>handleProperty(property)}>
        <Card.Img variant="top" className="property-card-img" src={property.imgs_url[0]} />
            <Card.Body>
                <Card.Title className="property-title">{property.fullName}</Card.Title>
                {/* <Card.Text className="property-card-text">
                Tirthan Valley is a wonder land located in the Kullu 
                </Card.Text> */}
                {/* <Button variant="primary">Read More</Button> */}
            </Card.Body>
        </Card>)
        }
        </div>

        </div>
    )
}
