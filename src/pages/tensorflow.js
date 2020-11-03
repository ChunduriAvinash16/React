import React, {useRef } from 'react'
import useTfClassfication from '../utils/Hooks/useTfClassfication';
export default function Tensorflow() {
    const imageRef=useRef();
    const [predict,predictions,isloading] =useTfClassfication();
    function readUrl(e){
        console.log(e);
    }
    return (
        <div className="flex justify-center my-5">
        <div className="w-1/3">
            <img crossOrigin="anonymous" src="https://images.unsplash.com/photo-1561037404-61cd46aa615b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE3OTAzNX0"
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
    )
}
