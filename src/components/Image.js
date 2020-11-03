import { AnimatePresence, motion } from 'framer-motion';
import React, { useRef, useState} from 'react';
import useTfClassfication from '../utils/Hooks/useTfClassfication';
export default function Image({show,index,handleRemove,image}) {
    const [isHovering, setisHovering] = useState(false);
    const [showPreview, setshowPreview] = useState(false);
    const imageRef=useRef();
    const [predict,predictions,isloading,setPredections] =useTfClassfication();

    return (
        <div className="relative"   
            onMouseEnter={()=>setisHovering(true)}
           onMouseLeave={()=>setisHovering(false)}>
               {
                   (predictions.length || isloading)>0 &&
                   <span className="absolute left-0 ml-5 bg-gray-800 text-white rounded-lg shadow px-2" onClick={()=>setPredections([])}>
                    {isloading &&  <p>Fetching results ⏳</p> }
                    {predictions.map((pre) =>
                        <div className="flex justify-between">
                             <p>{pre.className}</p>
                             <p>{Math.floor(pre.probability * 100)}%</p>
                        </div>
                     )}
                   </span>
               }
               
         <i className={`fas fa-times right-0 absolute cursor-pointer bg-white-600 hover:bg-white-900 ${isHovering===true?"":"hidden"}`} 
           onClick={()=>handleRemove(index)}
           >    
        </i>
        <i className={`fas fa-search left-0 absolute cursor-pointer bg-white-600 hover:bg-white-900 ${isHovering===true?"":"hidden"}`} 
          onClick={()=>predict(imageRef.current)} >    
        </i>
         <img 
            src={image}  
            width="100%"
            height="auto" 
            onClick={show}
            ref={imageRef}
            crossOrigin="anonymous"
        />
        </div>
    );
}
