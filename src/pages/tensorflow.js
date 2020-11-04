import { Log } from '@tensorflow/tfjs';
import React, {useEffect, useRef, useState } from 'react'
import useTfClassfication from '../utils/Hooks/useTfClassfication';
export default function Tensorflow() {
    const imageRef=useRef();
    const [predict,predictions,isloading,setPredictions] =useTfClassfication();
    const [imgUrl, setimgUrl] = useState("https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE3OTAxNX0")

    function handleChange(e){
        console.log(e.target.value);
        if(e.target.value===""){
            setimgUrl("https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE3OTAxNX0")
        }else {
            setimgUrl(e.target.value)
        }
    }
 

    return (
        <div>
            <div className="flex justify-center my-3">   
                <input type="text" className="w-1/3 rounded border-2" placeholder="Enter Image Url" onChange={handleChange}/>
            </div>
        <div className="flex justify-center my-5">
            
        <div className="w-1/3">
            <img crossOrigin="anonymous" src={imgUrl}
            width="500"
            ref={imageRef}/>
            {
                predictions.length>0 && 
                     predictions.map(p=>
                        <div className="flex justify-between">
                             <p>{p.className}</p>
                             <p>{Math.floor(p.probability * 100)}%</p>
                        </div>
                     )
            }
            <div className="flex my-5 justify-center">
               
                <button className="p-2 rounded bg-blue-800 text-white w-64" onClick={()=>predict(imageRef.current)}>
                    {isloading?"⌛"
                    :"Predict Results"}</button>
            </div>
        </div>
        </div>
        </div>
    )
}
