import {useRouter} from "next/router"
import { useEffect } from "react";
import { useState } from "react";
import NavBar from "../../components/NavBar";
import Once from "../../components/Once";

const blogcontent = () => {
    let route = useRouter();

    const [page, setPage] = useState(route.query.blogcontent)

        console.log("queryblog",route.query.blogcontent, {page})

        const getPage = "";

        useEffect(()=>{
            setPage(route.query.blogPage)
        },[route.query.blogcontent])


    return (
        <div>
            <NavBar/>
            {page=="once" && <Once />}
            
        </div>
    );
}

export default blogcontent;
