import { Button, Card } from "react-bootstrap";


export default function PropertyPlace() {

    const objEntities = {
        "Bathroom":["Toilet paper","Towels", "Bath or shower", "Private bathroom", "Toilet", "Shower"],
        "Kitchen": ["Electric kettle"],
        "Bedroom":["Linen","Wardrobe or closet"],
        "Entertainment and family services": ["Children television networks"],
        "Outdoors" : ["Outdoor furniture", "Outdoor dining area", "Outdoor furniture", "Garden", "BBQ facilities"],
        "Activities" : ["Hiking"],
        "Food & Drink" : ["Tea/Coffee maker"],
        "Internet" : ["Access"]
    }

  return (
    <>
   <div className="facility-body">
      
    <h4>Facilities</h4>
    {/* <div className="hotel-facilities" id="hp_facilities_box" data-et-view=""> */}
                
                <div className="row container hotels-section-list">

                    {Object.keys(objEntities).map((key)=> 
                        <Card style={{ width: "200px" }}>
                            <Card.Body>
                                    <Card.Subtitle className="mb-2 text-muted facility-text">{key}</Card.Subtitle>
                                    <Card.Title className="facility-text facility-list">{
                                        objEntities[key].map((ele,idx)=>
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
    </>
  );
}
