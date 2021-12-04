const  typesOfProperties  =
     {
        "senior" : "Senior Citizen Friendly",
        "luxury" : "Luxury ",
        "deluxe" : "Deluxe",
        "superDeluxe" : "Super Deluxe"
    }


const domainType = (gotObj)=>{

    if (typeof window !== 'undefined') {
        const hostname = window.location.hostname;
        console.log("checkme",hostname);
        if(hostname == "tirthanvalleystay.vercel.app"){
            return `https://tirthanvalleybackend.herokuapp.com/property?propertyName=${gotObj}`
        }else{
            return `http://localhost:4000/property?propertyName=${gotObj}`
        }
     }
}

export {typesOfProperties, domainType};