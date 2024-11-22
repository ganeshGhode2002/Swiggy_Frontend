import React, { useEffect, useState } from 'react';
import { HiArrowSmLeft } from "react-icons/hi";
import { HiArrowSmRight } from "react-icons/hi";

const Categorys = () => {
    const [data, setData] = useState([]);
    const [slide, setSlide] = useState(0);

    const fetchData = async () => {
        const response = await fetch("http://localhost:5000/categories");
        const newData = await response.json();
        setData(newData);
    };

    useEffect(() => {
        fetchData();
    }, []);

    const nextSlide = () => {
        if (data.length - 8 === slide) {
            return false;
        }
        setSlide(slide + 3);
    };

    const prevSlide = () => {
        if (slide === 0) return false;
        setSlide(slide - 3);
    };

    return (
        <div className="w-full md:w-[1200px] mx-auto p-4">
            <div className="flex justify-between items-center">
                <div className="text-3xl md:text-4xl font-bold">What's In Your Mind?</div>
                <div className="flex gap-3">
                    <div
                        className="w-[40px] h-[40px] cursor-pointer rounded-full bg-[#e2e2e7] flex justify-center items-center"
                        onClick={prevSlide}
                    >
                        <HiArrowSmLeft />
                    </div>
                    <div
                        className="w-[40px] h-[40px] cursor-pointer rounded-full bg-[#e2e2e7] flex justify-center items-center"
                        onClick={nextSlide}
                    >
                        <HiArrowSmRight />
                    </div>
                </div>
            </div>

            <div id="hello" className="flex overflow-x-auto space-x-4 py-4">
                {data.map((elem, index) => {
                    return (
                        <div
                            style={{
                                transform: `translateX(-${slide * 100}%)`,
                            }}
                            key={index}
                            className="shrink-0 md:max-w-[150px] w-[220px] h-[150px] md:h-[200px] duration-500"
                        >
                            <img
                                src={"http://localhost:5000/images/" + elem.image}
                                alt=""
                                className="w-full h-full object-cover rounded-lg"
                            />
                        </div>
                    );
                })}
            </div>

            <hr className=" my-3 border-b-2 border-[#a7a7a6]" />
        </div>
    );
};

export default Categorys;
