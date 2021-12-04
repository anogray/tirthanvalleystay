import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import axios from "axios";
import Main from '../components/Main';
import NavBar from '../components/NavBar';
import { useEffect } from 'react';
import Footer from '../components/Footer/Footer';

export default function Home() {

  const weatherCall = ()=>{



// function(d,s,id){
  
//   var js,fjs=d.getElementsByTagName(s)[0];
  
//   if(!d.getElementById(id)){js=d.createElement(s);
  
//   js.id=id;js.src='https://weatherwidget.io/js/widget.min.js';
  
//   fjs.parentNode.insertBefore(js,fjs);}
//   }
   

  }

  // useEffect(() => {

  //   if (typeof window !== 'undefined') {
  //     console.log("gotDoc",document,document.getElementById("weatherwidget-io-js"));
  //     const script = document.createElement("script");
  //     var fjs=document.getElementsByTagName(script)[0];
  //   if(!document.getElementById("weatherwidget-io-js")){
  //     var fjs=document.getElementsByTagName(script)[0];

  
  //     script.src = "https://weatherwidget.io/js/widget.min.js";
  //     script.id = "weatherwidget-io-js";
  //     script.async = true;
  //     document.body.appendChild(script)
  //   }
    
  // }
    



  // }, []);

  return (
    <div className="main-page">
    <NavBar/>

    {/* <div className="weather-container">
    <a class="weatherwidget-io" href="https://forecast7.com/en/31d6477d43/gushaini/" data-label_1="GUSHAINI" data-label_2="WEATHER" data-theme="original" >GUSHAINI WEATHER</a>

    </div> */}
    {/* <Main/> */}
    {/* <Footer/> */}
  </div>
  )
}
