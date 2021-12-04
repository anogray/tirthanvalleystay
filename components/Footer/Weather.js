import React, { useEffect, useState } from "react";
import Link from 'next/link'


const Weather = ()=>{

  const [weatherCmp, setWeather] = useState(false);

    useEffect(() => {

        if (!weatherCmp && typeof window !== 'undefined') {
        //   console.log("gotDoc",document,document.getElementById("weatherwidget-io-js"));
          const script = document.createElement("script");
          var fjs=document.getElementsByTagName(script)[0];
          if(!document.getElementById("weatherwidget-io-js")){      
            console.log("letusSee");
            script.src = "https://weatherwidget.io/js/widget.min.js";
            script.id = "weatherwidget-io-js";
            //script.async = true;
            document.body.appendChild(script)
            
          }
          
        } 
      }, []);

      useEffect(()=>{
        if(document.getElementById("weatherwidget-io-js")){  
           setWeather(true);
        }    
      },[weatherCmp])
    

    return (
      <>
        { weatherCmp &&
        (<div className="weather-container">
         <a class="weatherwidget-io" href="https://forecast7.com/en/31d6477d43/gushaini/" data-label_1="GUSHAINI" data-label_2="WEATHER" data-theme="original" />
        </div>)
        }
        </>
    )
}

export default Weather;