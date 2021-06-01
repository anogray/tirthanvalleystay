import React, { useEffect } from 'react';

const Main = () => {
    
    let emptyArr=[1,2,3,4,5,6,1,2,3,4,5,6,1,2,3,4,5,6,1,2,3,4,5,6,1,2,3,4,5,6,1,2,3,4,5,6,1,2,3,4,5,6]
        // useEffect(() => {

    //     const images  = async()=>{
            
    //     }
    //     images();
    // })
    return (
        <div>
            {/* See images<img src="https://www.tirthanvalleystay.com/images/photoslider1.jpg" alt="no image loaded"></img> */}
            <ul>
                {emptyArr.map((ele)=>{
                    return (
                        <li>
                        <img src="https://www.tirthanvalleystay.com/images/Tree-House/Tree-5.jpg" alt="no image loaded"></img>
                        <img src="https://www.tirthanvalleystay.com/images/callout-bg.jpg" alt="no image loaded"></img>
                        <img src="https://www.tirthanvalleystay.com/images/photoslider1.jpg" alt="no image loaded"></img>
                        <img src="https://www.tirthanvalleystay.com/images/Tree-House/Tree-5.jpg" alt="no image loaded"></img>
                        <img src="https://www.tirthanvalleystay.com/images/callout-bg.jpg" alt="no image loaded"></img>
                        <img src="https://www.tirthanvalleystay.com/images/photoslider1.jpg" alt="no image loaded"></img>
                        
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}

export default Main;
