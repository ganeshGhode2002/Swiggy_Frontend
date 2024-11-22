import React, { useState, useEffect } from 'react';
import Card from "./Card";

const FoodDelivery = () => {
  const [data, setData] = useState([]);

  const fetchTodRestData = async () => {
    const response = await fetch("http://localhost:5000/top-restaurant-chains");
    const finalData = await response.json();
    setData(finalData);
  };

  useEffect(() => {
    fetchTodRestData();
  }, []);

  return (
    <div className="w-full px-4 md:w-[1200px] mx-auto">

      <div className="flex justify-between items-center mb-5">
        <div className="text-3xl sm:text-4xl font-bold">Restaurants With Online Food Delivery In Ulhasnagar</div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mt-5">
        {data.map((elem, index) => {
          return (
            <div key={index} className="shrink-0 w-full md:w-[300px] lg:w-[250px]">
              <Card className="mr-5" {...elem} key={index} />
            </div>
          );
        })}
      </div>

      <hr className="my-6 border-2 border-[#e0e0e0]" />
    </div>
  );
};

export default FoodDelivery;
