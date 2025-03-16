import React, { useState } from 'react'
import { FaStar } from "react-icons/fa";
import './style.css'

const Star = ({noOfStars=5}) => {
    const[rating,setRating] = useState();
    const[mouse,setMouse] = useState();
    function  handleclick(index){
        setRating(index);
    }

    function handlemouseenter(index){
        setMouse(index)
    }
    function handlemouseleave(){
        setMouse(rating);
    }

    
  return (
    <div className='align'>
        {
            // The spread operator (...) takes this empty array and "spreads" it into a new array with undefined values.\
            // example : [undefined, undefined, undefined, undefined, undefined]
                [...Array(noOfStars)].map((_,index)=>(
                    // index=index+1
            
                    <FaStar className={index<=(mouse||rating)?'active':'inactive'} size={50} key={index+1} onClick={()=>handleclick(index)} onMouseLeave={handlemouseleave} onMouseEnter={()=>handlemouseenter(index)} />
                ))
        }

    </div>
  )
}

export default Star