import Axios from 'axios';
import { useState,useEffect } from 'react';

const api=process.env.REACT_APP_UNSPLASH_API
const secret=process.env.REACT_APP_UNSPLASH_KEY

export default function useFetchimage(page,searchTerm) {
    const [Images, setImages] = useState([]);
    const [errors, setErrors] = useState([]);
    const [isLoding, setisLoding] = useState(false);

    useEffect(() => {
        setisLoding(true);
        const url=searchTerm===null? "photos?" : `search/photos?query=${searchTerm}&`;
        Axios.get(`${api}/${url}client_id=${secret}&page=${page}`)
        .then((res)=>{
            console.log(searchTerm);
        if(searchTerm===null){
            setImages([...res.data]);
        }else{
            if(page>1){
                console.log("inside no",page);
                setImages([...Images,...res.data.results])
            }else{
                console.log(page);
                setImages([...res.data.results])
            }
        }
        setisLoding(false);
        })
        .catch((e)=>{
            setErrors(["Unable to fetch"])
            setisLoding(false);   
        });
    
    },[page,searchTerm])
    

    return [Images,setImages,errors,isLoding];
}
