import React from "react";
import { useState } from "react";
import "./task3.css"

export default function Task3() {
    let [images, setImages] = useState([
      "https://www.kfcpakistan.com/images/43a98620-ffaa-11ed-b6b3-6970cc1cd666-zingerstack-Combo-2023-05-31115706.png",
      "https://www.kfcpakistan.com/images/43a9fb50-ffaa-11ed-8180-812e571998fe-twister-combo-2023-05-31115706.png",
      "https://www.kfcpakistan.com/images/43a9fb50-ffaa-11ed-8180-812e571998fe-HotWings_variant_0-2023-05-31115706.png",
      "https://www.kfcpakistan.com/images/43a95f10-ffaa-11ed-b673-4121381f04c6-CrispyDuoBox-2023-05-31115706.png",
      "https://www.kfcpakistan.com/images/43a9fb50-ffaa-11ed-8180-812e571998fe-family-Festivle-3-2023-05-31115706.png"
 
    ]);
    let [image , setImage] = useState(images[0])
 
    
 
 
    return (
     <div className="container">
     <h1>Image Carousel</h1>
     <div className="show"><img src={image} alt="" /></div>
     <div className="widgets"> 
     <button> - </button>
     {images.map((i,k)=><button onClick={()=>{
       setImage(i)
       
         }}><img src={i} alt="" key={k} srcset="" /></button>)}
     <button> + </button>
     
      </div>
     </div>
    );
  }