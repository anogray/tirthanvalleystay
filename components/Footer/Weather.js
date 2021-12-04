import React, { useEffect } from "react";
import Link from 'next/link'


const Weather = ()=>{

    useEffect(() => {

        if (typeof window !== 'undefined') {
        //   console.log("gotDoc",document,document.getElementById("weatherwidget-io-js"));
          const script = document.createElement("script");
          var fjs=document.getElementsByTagName(script)[0];
        if(!document.getElementById("weatherwidget-io-js")){      
          script.src = "https://weatherwidget.io/js/widget.min.js";
          script.id = "weatherwidget-io-js";
          script.async = true;
          document.body.appendChild(script)
       }
        
      }    
      }, []);
    

    return (
        <div className="weather-container">
    <a class="weatherwidget-io" href="https://forecast7.com/en/31d6477d43/gushaini/" data-label_1="GUSHAINI" data-label_2="WEATHER" data-theme="original" >GUSHAINI WEATHER</a>
    </div>
    )
}

export default Weather;