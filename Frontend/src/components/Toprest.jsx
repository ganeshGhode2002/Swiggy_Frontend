import React, { useState, useEffect } from 'react';
import { HiArrowSmLeft } from "react-icons/hi";
import { HiArrowSmRight } from "react-icons/hi";
import Card from './Card';

const Toprest = () => {
  const [data, setData] = useState([]);
  const [slider, setSlider] = useState(0);

  const fetchTodRestData = async () => {
    const response = await fetch("http://localhost:5000/top-restaurant-chains");
    const finalData = await response.json();
    setData(finalData);
  };

  useEffect(() => {
    fetchTodRestData();
  }, []);

  const nextSlider = () => {
    if (slider + 3 < data.length) {
      setSlider(slider + 3);
    }
  };

  const prevSlider = () => {
    if (slider > 0) {
      setSlider(slider - 3);
    }
  };

  return (
    <div className="w-full md:w-[1200px] mx-auto p-4">
      <div className="flex justify-between items-center">
        <div className="text-2xl sm:text-3xl md:text-4xl font-bold">
          Top Restaurant Chains in Ulhasnagar
        </div>
        <div className="flex gap-3">
          <div
            className="w-[40px] h-[40px] cursor-pointer rounded-full bg-[#e2e2e7] flex justify-center items-center"
            onClick={prevSlider}
          >
            <HiArrowSmLeft />
          </div>
          <div
            className="w-[40px] h-[40px] cursor-pointer rounded-full bg-[#e2e2e7] flex justify-center items-center"
            onClick={nextSlider}
          >
            <HiArrowSmRight />
          </div>
        </div>
      </div>

      <div
        id="hello"
        className="flex gap-4 overflow-x-auto mt-5 scroll-smooth"
      >
        {data.map((elem, index) => (
          <div
            style={{
              transform: `translateX(-${slider * 100}%)`,
            }}
            key={index}
            className="shrink-0 m-2 mb-9 w-[100%] sm:w-[250px] md:w-[300px] h-[300px] md:h-[350px] duration-500"
          >
            <Card {...elem} key={index} />
          </div>
        ))}
      </div>

      <hr className="my-6 border-b-2 border-[#a7a7a6]" />
    </div>
  );
};

export default Toprest;
