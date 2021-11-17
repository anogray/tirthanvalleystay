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
    <section className="hotel-facilities" id="hp_facilities_box" data-et-view="">
                
                <div className="container hotels-section-list">

                    {/* <div className="hotel-facilty-each">
                        <div className="place-heading">
                        Bathroom
                        </div>
                        <ul className="list-details">
                            <li className="facility-point">One</li>
                            <li className="facility-point">One</li>
                        </ul>
                    </div>
                    <div className="hotel-facilty-each">
                        <div className="place-heading">
                        Bathroom
                        </div>
                        <ul className="list-details">
                            <li className="facility-point">One</li>
                            <li className="facility-point">One</li>
                        </ul>
                    </div> */}
                    <div className="row">
                    {Object.keys(objEntities).map((key)=> <div className="col-sm hotel-facilty-each" key={key}>
                        <div className=" place-heading">
                        {key}
                        </div>
                       { 
                           objEntities[key].map((ele,idx)=><ul className="list-details" key={idx}>
                            <li className="facility-point">{ele}</li>
                        </ul>)
                        }
                    </div>
                    )}
                    </div>
                    {/* <div className="hotel-facilty-each">
                        <div className="place-heading">
                        Activities
                        </div>
                        <ul className="list-details">
                            <li className="facility-point">One</li>
                            <li className="facility-point">One</li>
                        </ul>
                    </div>
                    <div className="hotel-facilty-each">
                        <div className="place-heading">
                        Entertainment and family services
                        </div>
                        <ul className="list-details">
                            <li className="facility-point">One</li>
                            <li className="facility-point">One</li>
                        </ul>
                    </div>
                    <div className="hotel-facilty-each">
                        <div className="place-heading">
                        Bathroom
                        </div>
                        <ul className="list-details">
                            <li className="facility-point">One</li>
                            <li className="facility-point">One</li>
                        </ul>
                    </div>
                    <div className="hotel-facilty-each">
                        <div className="place-heading">
                        Activities
                        </div>
                        <ul className="list-details">
                            <li className="facility-point">One</li>
                            <li className="facility-point">One</li>
                        </ul>
                    </div>
                    <div className="hotel-facilty-each">
                        <div className="place-heading">
                        Entertainment and family services
                        </div>
                        <ul className="list-details">
                            <li className="facility-point">One</li>
                            <li className="facility-point">One</li>
                        </ul>
                    </div>
                    <div className="hotel-facilty-each">
                        <div className="place-heading">
                        Entertainment and family services
                        </div>
                        <ul className="list-details">
                            <li className="facility-point">One</li>
                            <li className="facility-point">One</li>
                        </ul>
                    </div> */}
                </div>
       </section>
        
        </div>
    </>
  );
}
