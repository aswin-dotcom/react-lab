import React, { useEffect, useState } from 'react'
import './ImageSlider.css'
import axios from './apiendpoint'
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";


const ImageSlider = () => {

    const[images,setImages] =  useState([]);
    const[curindex,setCurindex] =  useState(0);

    useEffect(()=>{
        fetchdata()
    },[])
     

    async function fetchdata(){
        const response  =await axios.get("?page=1&limit=5");
        const images  = response.data;
        // console.log(images);
        setImages(images);
        
    }

    function handlenext(){
        if(curindex!==images.length-1){
            setCurindex((cur)=>cur+1)
        }else{
            setCurindex(0);
        }

    }

    function handleprev(){
        if(curindex!==0) setCurindex((cur)=>cur-1);
        else setCurindex(images.length-1);

    }



  return (
    <div>
        <button onClick={()=>handleprev()}><FaChevronLeft /></button>

        {
            images && images.length>0 ?
             images.map((item,index)=>(
                index==curindex?   <img key={index} src={item.download_url} alt={item.download_url} style={{height:"500px",width:'500px'}} />:null
        
             ))
             :<div>No data found please wait</div>
        }
        <button onClick={()=>handlenext()}><FaChevronRight /></button>

    </div>
  )
}

export default ImageSlider