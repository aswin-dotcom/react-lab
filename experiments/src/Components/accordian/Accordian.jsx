import React, { useState } from "react";
import data from "./data";
import "./Accordian.css";

const Accordian = () => {
  const [selected, SetSelected] = useState(null);
  const[multi,Setmulti] =  useState(false);
  const[multidata,Setmultidata] = useState([]);

  function handleselect(currentId) {
    SetSelected(currentId == selected ? null : currentId);
  }
  
  function handlemultidata(currentId){

    let copy = [...multidata];
    let  index  =  copy.indexOf(currentId);
    if(index==-1){
        copy.push(currentId);
    }else{
        copy.splice(index,1);
    }
    console.log(copy);
    Setmultidata(copy);



 

  }

  

  return (
    <div className="accordian-wrapper">
        <button onClick={()=>Setmulti((cur)=>!cur)}>Multiple Select enable </button>
      <div>
        {data && data.length > 0 ? (
          data.map((item) => (
            <div key={item.id} className="item" onClick={multi?()=>handlemultidata(item.id):() => handleselect(item.id)}>
              <div className="accordian">
                <h3> {item.question}</h3>
                <span>+</span>
              </div>
              {selected == item.id || multidata.indexOf(item.id)!==-1? <div>{item.answer}</div> : null}
            </div>
          ))
        ) : (
          <div>No data found</div>
        )}
      </div>
    </div>
  );
};

export default Accordian;
