import React, { useEffect, useState } from "react";
import "./Scorl.css";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const API_URL = "https://dummyjson.com/products";

const Scrol = () => {
  const [width, setWidth] = useState(0);

  const get = async () => {
    const response = await axios.get(`${API_URL}`);
    return response.data;
  };

  const { data, isLoading, isError } = useQuery({
    queryKey: ["products"],
    queryFn: () => get(),
  });

  const handlescrolpercentage =  () => {
    // console.log(
    //   document.body.scrollTop,//How much you scrolled from top
    //   document.documentElement.scrollTop,// How much you scrolled from top
    //   document.documentElement.scrollHeight,// Whole page (including the part you don’t see).
    //   document.documentElement.clientHeight //Only the visible part (what fits in your screen).
    // );
    const scrolledFromTop =
    document.body.scrollTop || document.documentElement.scrollTop;
  
  const howMuchToScroll =
    document.documentElement.scrollHeight - document.documentElement.clientHeight;
  
  const scrolledPercent = (scrolledFromTop / howMuchToScroll) * 100;
  
  setWidth(scrolledPercent); // this updates the state
  console.log(scrolledPercent); // log the value directly instead of width

  };

  useEffect(() => {
    window.addEventListener("scroll", handlescrolpercentage);
    return () => {
      window.removeEventListener("scroll", handlescrolpercentage);
    };
  }, []);

  if (isLoading) {
    return <h1>...loading please wait</h1>;
  }

  if (isError) {
    return <h1>Error While fetching</h1>;
  }
  //   console.log(data);

  return (
    <div>
      <div className="navbar">
        <h1 className="head">Scorll Indicator</h1>
        <p  className = 'scroll-bar' style={{
            width:`${width}%`,
            height:'10px',
            backgroundColor:'black',
         
        }}></p>
      </div>
      <div className="product-container">
        {data.products.length > 0
          ? data.products.map((product) => (
              <div key={product.id} className="product">{product.title}</div>
            ))
          : null}
      </div>
    </div>
  );
};

export default Scrol;
