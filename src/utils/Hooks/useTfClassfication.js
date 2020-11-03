import React, { useState } from 'react';
import "@tensorflow/tfjs";
import * as mobilenet from '@tensorflow-models/mobilenet';

export default function useTfClassfication(img) {
    const [isloading, setisLoading] = useState(false);
    const [predictions, setPredictions] = useState([]);


    function predict(img){
        //const img=imageRef.current;
        setisLoading(true);
        mobilenet.load().then(model => {
            // Classify the image.
            model.classify(img).then(predictions => {
              setPredictions(predictions);
              setisLoading(false);
            });
          })
    }

    return [predict,predictions,isloading,setPredictions];
}
