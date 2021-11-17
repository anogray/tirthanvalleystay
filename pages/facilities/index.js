import Head from "next/head";
import Image from 'next/image'
import { Button, Card } from "react-bootstrap";
import NavBar from "../../components/NavBar";
// import styles from "../../styles/Blog.module.scss"
import styles from './Facilities.module.css'


 // React.createElement('p', {}, 'Hello, World!')

export default function Blog() {
  return (
    <>

    <NavBar/>
    
    <div className="facility-body">
      
    <section className="hotel-facilities" id="hp_facilities_box" data-et-view="">
                
                <div className="hotels-section-list">
                    <div className="hotel-facilty-each">
                        <div className="heading">
                        Bathroom
                        </div>
                        <ul className="list-details">
                            <li className="facility-point">One</li>
                            <li className="facility-point">One</li>
                        </ul>
                    </div>
                    <div className="hotel-facilty-each">
                        <div className="heading">
                        Activities
                        </div>
                        <ul className="list-details">
                            <li className="facility-point">One</li>
                            <li className="facility-point">One</li>
                        </ul>
                    </div>
                    <div className="hotel-facilty-each">
                        <div className="heading">
                        Entertainment and family services
                        </div>
                        <ul className="list-details">
                            <li className="facility-point">One</li>
                            <li className="facility-point">One</li>
                        </ul>
                    </div>
                    <div className="hotel-facilty-each">
                        <div className="heading">
                        Bathroom
                        </div>
                        <ul className="list-details">
                            <li className="facility-point">One</li>
                            <li className="facility-point">One</li>
                        </ul>
                    </div>
                    <div className="hotel-facilty-each">
                        <div className="heading">
                        Activities
                        </div>
                        <ul className="list-details">
                            <li className="facility-point">One</li>
                            <li className="facility-point">One</li>
                        </ul>
                    </div>
                    <div className="hotel-facilty-each">
                        <div className="heading">
                        Entertainment and family services
                        </div>
                        <ul className="list-details">
                            <li className="facility-point">One</li>
                            <li className="facility-point">One</li>
                        </ul>
                    </div>
                    <div className="hotel-facilty-each">
                        <div className="heading">
                        Entertainment and family services
                        </div>
                        <ul className="list-details">
                            <li className="facility-point">One</li>
                            <li className="facility-point">One</li>
                        </ul>
                    </div>
                </div>
       </section>
        
        </div>
    </>
  );
}
